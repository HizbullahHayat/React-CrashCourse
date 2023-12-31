import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem(){
        setThingsArray((prevState)=> {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }

    const thingsElements=thingsArray.map((i)=> <p key={i}> {i}</p>)


  return (
    <div>
      <button onClick={addItem} className="btn">Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
