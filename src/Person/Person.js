import React, {Component} from 'react';

class Person extends Component {
    render() {
        return (
            <div className="Person-app">
                <p>I'm {this.props.name} Bear.</p>
                <p>I'm {this.props.age} old!</p>
                <button onClick={this.props.click}>Switch name</button>
                <p>I am {Math.floor(Math.random() *30)} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
        )
    }
}

export default Person;

