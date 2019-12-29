import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP Request...
        setTimeout(() => {
            alert('save data to cloud');
        }, 1000);
    }, [props.persons]); // or use an empty array [] to only show once when you initiate
    
    // useEffect();

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold) // classes =['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button 
                className={btnClass}
                onClick = { props.clicked } > Toggled Persons 
            </button>  
        </div>

    );
};

export default Cockpit;