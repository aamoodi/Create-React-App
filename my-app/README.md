# Homework #8
**Ayman Amoodi**
**NetID: UE3673**

## Question 1
Answer stuff here.


## Question 3
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QandA from './QandA.json';
ReactDOM.render(<div>
        <h1>Hello CS651 from React</h1>
        <h2>This is: Ayman Amoodi</h2>
        <h2>NetID: UE3673</h2>
        {QandA.map((QDetails, index)=>{
          return<div><h2>{QDetails.question}</h2>
          <h2>{QDetails.answer}</h2></div>
        })}
    </div>, document.getElementById('root'));
