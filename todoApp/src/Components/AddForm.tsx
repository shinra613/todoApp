import { useState,FormEvent,useEffect } from 'react'
import ListDisplay from "./ListDisplay";

interface Props {
    isActive : boolean  ;
    isCompleted : boolean ; 
}
 

const AddForm = (afProp : Props) => {

    const [text, setText] = useState("");
    const [isClicked,setIsClicked] = useState(true); 
    const [key,setKey] = useState(0);

    const takenote = (notes: string) => {
        let seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

        let noteObj = {
            note : notes,
            noteStatus : "Open"
        }

        localStorage.setItem(seq,JSON.stringify(noteObj)); 
        let field = document.getElementsByClassName("addField")[0] as HTMLInputElement; 
        field.value = "";

        setKey(key+1); 
        
    }

    useEffect(()=>{
setIsClicked(!isClicked); 


    },[]);

    
    function handleEvent(event: FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setText(value);
    }
    return ( 
        <div>
            <div className="addForm">
                <input type="text" className= "addField" placeholder="add details" onInput={handleEvent}/>
                <button onClick={() => takenote(text)}>Add</button>
            </div>
           

            <ListDisplay key={key} isActive={afProp.isActive} isCompleted={afProp.isCompleted}/>
        </div>
    );
    
}
 
export default AddForm;