import { useState,FormEvent } from 'react'
import ListDisplay from "./ListDisplay";


 

const AddForm = () => {


    const [text, setText] = useState("");

    const [func, setFunc] = useState(()=>ListDisplay());

    const takenote = (notes: string) => {

        let seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

        localStorage.setItem(seq, notes); 

        let field = document.getElementsByClassName("addField")[0] as HTMLInputElement; 

        field.value = "";

        setFunc(()=>ListDisplay())

        return ( console.log(notes) );
    }
    
    function handleEvent(event: FormEvent<HTMLInputElement>) {
       
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setText(value);
        // console.log(text);
      }
    return ( 
        <div>
<div className="addForm">
    <input type="text" className= "addField" placeholder="add details" onInput={handleEvent}/>
                <button onClick={() => takenote(text)}>Add</button>
                
            </div>
            {func}
            
        </div>
     );
}
 
export default AddForm;