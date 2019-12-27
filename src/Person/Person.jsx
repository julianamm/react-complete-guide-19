import React, {Component} from 'react';
import styled from 'styled-components'
// import './Person.css';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 10px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        .Person-app {
            width: 450px;
    }
`;

const person = (props) => {

    return (
        // <div className="Person-app" style={style}>
        <StyleDiv>

            <p>I'm {props.name} Bear.</p>
            <p>I'm {props.age} old!</p>
            <button onClick={props.click}>Switch name</button>
            <p>I am {Math.floor(Math.random() *30)} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </StyleDiv>
    )
};

export default person;

