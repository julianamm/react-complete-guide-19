import React, {Component} from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) => {
    const style = {
        'media (min-width: 500px)' : {
            width: '250px'
        }
    };
    return (
        <div className="Person-app" style={style}>
            <p>I'm {props.name} Bear.</p>
            <p>I'm {props.age} old!</p>
            <button onClick={props.click}>Switch name</button>
            <p>I am {Math.floor(Math.random() *30)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
    
};

export default Radium(person);

