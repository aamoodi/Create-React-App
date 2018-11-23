import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {QandAPanel} from './QandAPanel';
import {ControlPanel} from './ControlPanel';
import QandA from './QandA.json';
import {QuestionCreator} from './QuestionCreator'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {currentQ: 0,answerVisibility:true, currentPool: QandA}
  }
  nextQ() {

      let currentQ = this.state.currentQ + 1;
      currentQ %= this.state.currentPool.length;
      this.setState({currentQ: currentQ});
  }
  prevQ() {
      let currentQ = this.state.currentQ - 1;
      if(currentQ < 0 )
      currentQ = this.state.currentPool.length-1;
      this.setState({currentQ: currentQ});
  }
  stateChange(){

this.setState({
      answerVisibility: !this.state.answerVisibility
    })


  }

    render(){
      let len =this.state.currentPool.length;
      let quest = this.state.currentQ+1;
      let visibility = this.state.answerVisibility;
      let listItems = QandA.map(function(Qdetails, i){
        return <li> {Qdetails.question}</li>;
      });

      let buttonBar = <div>
                <button onClick={this.nextQ.bind(this)}>Next Question</button>
                <button onClick={this.prevQ.bind(this)}>Previous Question</button>
                <button onClick={this.stateChange.bind(this)}>Show Answer</button>
            </div>;
   let contents = <div>


      {buttonBar}
      {listItems[this.state.currentQ]}


  </div>;
return (
  <div>

  <br/>

    <ControlPanel currentQ ={quest} numberOfQuestion = {len}nextButton = {this.nextQ.bind(this)}
    prevButton = {this.prevQ.bind(this)} visibleButton = {this.stateChange.bind(this)} />,
    <br/>
    <br/>
    <QandAPanel currentQ ={quest}showAnswer = {visibility}/>
    <QuestionCreator />
    </div>
)}
}




ReactDOM.render(

    <App />,
  document.getElementById('root')
);



/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/
