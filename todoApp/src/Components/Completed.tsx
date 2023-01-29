import ListDisplay from "./ListDisplay";
import { useState } from "react";


const CompletedList = () => {

    const [key,setKey] = useState(0);

    const [func, setFunc] = useState(<ListDisplay isActive={false} isCompleted={true} key={key} />);
   


    const clearLocalStorage = () => {
        localStorage.clear();
        setFunc(<ListDisplay key={key} isActive={false} isCompleted={true} />); 
        setKey(key+1)
    }
     
    
    return (<div  className="allContent">
         <ListDisplay key={key} isActive={false} isCompleted={true} />

        <div>
            <button className="Delete" onClick={clearLocalStorage}>Delete All</button>
        </div>
    </div>  );
}
 
export default CompletedList;