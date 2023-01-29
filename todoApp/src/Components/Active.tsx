import AddForm from "./AddForm";


const ActiveList = () => {
    return ( <div  className="allContent">
        <AddForm isActive={true} isCompleted={false} />

    </div> );
}
 
export default ActiveList;