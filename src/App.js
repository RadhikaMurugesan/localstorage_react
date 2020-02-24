import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState();
  const [items, setItems] = React.useState([]);
  const [click, setClick] = React.useState(false);

  function onChange(event) {
    setValue(event.target.value);
  }

  function onAdd() {
    setItems([...items, value]); 
    localStorage.setItem("myValueInLocalStorage", JSON.stringify(items));
    setValue("");
  }

  function getItems() {
    const allItems = JSON.parse(localStorage.getItem("myValueInLocalStorage"));    
    console.log("getItems", allItems);
    return allItems.map((item) => {
      return(
        <li>{item}</li>
      )
    });
  } 
  return (
    <div className="App">
      <h2>React with Local Storage</h2>
      <div className="container">
        <input value={value} type="text" onChange={onChange} />
        <button onClick={onAdd}>Add</button>
      </div>
      <button onClick={() =>setClick(true)}>GetItems</button>
      <div className="listContainer">
        
        <ol>{click ? getItems() : null}</ol> 
       
      </div>
    </div>
  );
}

export default App;
