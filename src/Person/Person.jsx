import React from 'react';
import classes from './Person.module.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p>I'm {props.name} Bear.</p>
            <p>I'm {props.age} old!</p>
            <button onClick={props.click}>Switch name</button>
            <p>I am {Math.floor(Math.random() *30)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default person;

