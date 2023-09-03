import React from 'react';

export default function Joke(props) {
    console.log(props);
    return (
        <div className='child-joke'>
            <h2>{props.Setup}</h2>
            <p>{props.Punchline}</p>
            <hr />
        </div>
    );
}

/*
Some other ways ....
1-
    <h2>Setup: {props.Setup}</h2>
    <p>Props: {props.Punchline}</p>

2-
    {props.Setup && <h2>Setup: {props.Setup}</h2>}
    <p>Props: {props.Punchline}</p>

3-Conditional Rendering

    <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
    <p>Punchline: {props.punchline}</p>

*/