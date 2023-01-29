import Icon from '../assets/delete.png'
import { useState } from 'react';
import { json } from 'stream/consumers';




interface Props {

    isActive: Boolean;
    isCompleted: Boolean;
}


const ListDisplay = (LabelProp: Props) => {





    const [keys, setKeys] = useState(Object.keys(localStorage));





    const DeleteTask = (taskID: string) => {

        localStorage.removeItem(taskID);

        setKeys(Object.keys(localStorage));

    }


    const checkboxChecker = (taskID: string, e: any) => {
        let localData = localStorage.getItem(taskID) || "";
        let parsedLocalData = JSON.parse(localData);

        parsedLocalData.noteStatus = parsedLocalData.noteStatus === "Open" ? "Closed" : "Open";
        localStorage.setItem(taskID, JSON.stringify(parsedLocalData));
        setKeys(Object.keys(localStorage));
        console.log("completed");
    }




    return (<div className="listDisplay">
        {keys.map(key => {




            if (!LabelProp.isCompleted) {

                let localStorageValue = localStorage.getItem(key) || '';
                let parsedValue = JSON.parse(localStorageValue);


                if (!LabelProp.isActive ) {



                    return (<div className="addedTask" id={key}>
                        <div className="taskContent">

                            <input type="checkbox" checked={parsedValue.noteStatus === "Open" ? false : true} onChange={(e) => { checkboxChecker(key, e) }}></input>
                            <label htmlFor={key}>{parsedValue.noteStatus === "Open" ? parsedValue.note : <s>{parsedValue.note}</s>}</label>


                        </div>
                        {/* <div className="iconContent" onClick={() => { DeleteTask(key) }}>
    <img className="deleteIcon" src={Icon} alt="Delete" />
</div> */}
                    </div>)

                } else if (LabelProp.isActive && parsedValue.noteStatus !== "Closed"){

                    return (<div className="addedTask" id={key}>
                        <div className="taskContent">

                            <input type="checkbox" onChange={(e) => { checkboxChecker(key, e) }} ></input>
                            <label htmlFor={key}>{parsedValue.note}</label>


                        </div>
                        {/* <div className="iconContent" onClick={() => { DeleteTask(key) }}>
                        <img className="deleteIcon" src={Icon} alt="Delete" />
                    </div> */}
                    </div>)


                }


            } else {

                let localStorageValue = localStorage.getItem(key) || '';
                let parsedValue = JSON.parse(localStorageValue);


                if (parsedValue.noteStatus == "Closed") {


                    return (<div className="addedTask" id={key}>
                        <div className="taskContent">
                            <input type="checkbox" checked></input>
                            <label htmlFor={key}><s>{parsedValue.note}</s></label>
                        </div>
                        <div className="iconContent" onClick={() => { DeleteTask(key) }}>
                            <img className="deleteIcon" src={Icon} alt="Delete" />
                        </div>
                    </div>)

                }

            }



        })}

    </div>);




}

export default ListDisplay;