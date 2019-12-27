import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error ('Something went wrong');
    }
    
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

