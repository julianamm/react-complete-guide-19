import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Person from './Person/Person.jsx';

const StyleButton = styled.button`


`; 

class App extends Component {
    state = {
        persons: [
            { id: '1', name: "Juju", age: 31 },
            { id: '2', name: "Clau", age: 49 },
            { id: '3', name: "Vitor", age: 32 }
        ],
        OtherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personindex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personindex]
        };

        // alternative aproach
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personindex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); // mutable
        const persons = [...this.state.persons]; // immutable
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = ( 
                <div> {
                    this.state.persons.map((person, index) => {
                        return <Person
                        click = {
                            () => this.deletePersonHandler(index)
                        }
                        name = { person.name }
                        age = { person.age }
                        key = { person.id }
                        changed = {
                            (event) => this.nameChangedHandler(event, person.id)
                        }
                        />
                    })
                } 
                </div> 
            );
        }

        // let classes = ['red', 'bold'].join(' ');

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red') // classes = ['red']
        }
        if (this.state.persons.length <=1) {
            classes.push('bold') // classes =['red', 'bold']
        }

        return ( 
            
            <div className = "Main-App" >
            <h1> Hello world </h1>
            <p className={classes.join(' ')}>This is working</p>
            <button className='button'
            // onClick={this.switchNameHandler.bind(this, "Max")}>Switch name</button>
            onClick = { this.togglePersonsHandler } > Toggled name 
            </button> 
            { persons }   
            </div>
        );
    }
}

export default App;