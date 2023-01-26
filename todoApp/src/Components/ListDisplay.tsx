const ListDisplay = () => {
    const keys = Object.keys(localStorage);
  

    return (<div className="listDisplay">
        {keys.map(key => { return (<div><input type="checkbox" id={key}></input><label htmlFor={key}>{ localStorage.getItem(key)}</label></div>)})}
    
    </div>);
}
 
export default ListDisplay;