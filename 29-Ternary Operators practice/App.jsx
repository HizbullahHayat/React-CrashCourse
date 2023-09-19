import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

function App() {
  let isGoingOut = false;
  /*
    let answer //without using ternary 
    if(isGoingOut === true){
        answer = 'Yes'
    }else{
        answer = 'No'
    }
    */

  /*Logic of Ternary 
    ->  ? checks the codition weither true or false
    ->  '':'' if true, prompt left and viceversa
    */
//   let answer = isGoingOut ? "Yes" : "No"; //using ternary
  /**
   * Challenge: move our ternary directly inside of the JSX
   * so the "Yes" and "No" are determined inside the <h1>
   *
   * Hint: you will no longer need the `answer` variable
   */

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">

        {/* <h1>{answer}</h1>  */}
        <h1>{isGoingOut ? 'Yes':'No'}</h1> 
      </div>
    </div>
  );
}

export default App;
