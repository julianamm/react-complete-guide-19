import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: "Juju", age: 31},
      {name: "Clau", age: 49},
      {name: "Vitor", age: 32}
    ],
    OtherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS this.state.persons[0].name = "Max"
    this.setState({
      persons: [
        {name: newName, age: 37},
        {name: "Clau", age: 49},
        {name: "Vitor", age: 32}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 37},
        {name: event.target.value, age: 67},
        {name: "Vitor", age: 32}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px soliod pink',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
    <div className="Main-App">
      <h1>Hello world</h1>
      <h1>4</h1>
      <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, "Max")}>Switch name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        changed={this.nameChangedHandler}>My hobbies: Racing 00</Person>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, "Lu")}>My hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
