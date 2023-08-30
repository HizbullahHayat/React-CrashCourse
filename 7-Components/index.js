import React from "react";
import ReactDOM from "react-dom";
import Pic from "./react.png"


function Pic(){
    return(
        <Header >
            <nav>
            <img src={Pic} width='40px'/>
            </nav>
        </Header>
    )
}

function Page(){
    return(
        <div>
        <Pic />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was origionally created by Jorden Wake</li>
            <li>100k stars on github</li>
            <li>Is maintained by Fb</li>
        </ul>
        <footer><small>₢ 2023 Developed by Hizbullah Hayat. All right reserved</small></footer>
    </div>
    )
}


ReactDOM.render(<Page/>, document.getElementById('root'))