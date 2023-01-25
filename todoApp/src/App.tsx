import { useState } from 'react'
import './App.css'
import AllList from './Components/All';
import ActiveList from './Components/Active';
import CompletedList from './Components/Completed';


function App() {


  const [count, setCount] = useState(0)  ; 


  const updateCounter = (newcount: number) => {
    setCount(newcount); 
  }

 
   const RenderFunction  = () => {
    if (count === 0) {
return <AllList/>
    }else if (count === 1) {

      return <ActiveList/>
      
    }else if (count === 2) {
      return <CompletedList/>
    }else 
    return null;
  }
   
  
  return (
    <div className="App">
     <div className="mainbody">
      <div className="mainContainer">
        <h1>#Todo</h1>
         <div className="mainTitle">
           <a href="#" className="titles" onClick={() => updateCounter(0)}>All</a>
           <a href="#" className="titles" onClick={() => updateCounter(1)}>Active</a>
           <a href="#" className="titles" onClick={() => updateCounter(2)}>Completed</a>
         
         </div>
         <div className="mainContent">
              <RenderFunction />
            </div> 
      </div>
     </div>
    </div>
  )
}

export default App
