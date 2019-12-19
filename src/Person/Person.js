import React, {Component} from 'react';

class Person extends Component {
    render() {
        return (
            <div className="Person-app">
                <p>I'm {this.props.name} Bear.</p>
                <p>I'm {this.props.age} old!</p>
                <p>I am {Math.floor(Math.random() *30)} years old!</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;
