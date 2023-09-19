import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Star from "./Components/Boxes";

function App() {
    const [boxValue, setBoxValue]=React.useState(boxes)
    let mappingBoxes= boxes.map((i)=>{
        return (
            <div className="boxes--x"> key={i.id}</div>
        )
    }
    )
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            <h1>Boxes will go here</h1>
            {mappingBoxes}
        </main>
  );
}
export default App;
