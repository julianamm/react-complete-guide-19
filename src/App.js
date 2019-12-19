import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {
    const [personState, setPersonState] = useState({
      persons: [
        {name: "Juju", age: 31},
        {name: "Clau", age: 49},
        {name: "Vitor", age: 32}
      ],
      OtherState: 'some other value'
    }
    );

    console.log(personState)

    const switchNameHandler = () => {
      // console.log('was clicked!');
      // DON'T DO THIS this.state.persons[0].name = "Max"
      setPersonState({
        persons: [
          {name: "Luciana", age: 37},
          {name: "Clau", age: 49},
          {name: "Vitor", age: 32}
        ]
      })
    }

    return (
    <div className="Main-App">
      <h1>Hello world</h1>
      <h1>4</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} >My hobbies: Racing 00</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
    );
  
}
export default App;


