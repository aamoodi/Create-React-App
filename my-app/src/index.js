import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {QandAPanel} from './QandAPanel';
import {ControlPanel} from './ControlPanel';
import QandA from './QandA.json';
import {QuestionCreator} from './QuestionCreator';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {currentQ: 0,answerVisibility:true, currentPool: QandA, compVisibility:true ,listItem:QandA.map(function(Qdetails, i){
        return <li> {Qdetails.question}</li>;
      })}

  }
  addQ(value){

    this.state.listItem[this.state.currentPool.length+1] = value;
  }
  removeQ(value){
    this.state.listItem[this.props.value] = null;
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
  answerVisibility: true
    })
  }
    sChange(){
    this.setState({
      answerVisibility: false
    })}
    compState(){
  this.setState({
    compVisibility: true
      })
    }
      compChange(){
      this.setState({
        compVisibility: false
      })}
    render(){
      let len =this.state.currentPool.length;
      let quest = this.state.currentQ+1;
      let visibility = this.state.answerVisibility;

      let listItems = QandA.map(function(Qdetails, i){
        return <li> {Qdetails.question}</li>;
      });
   let contents = <div>
      {listItems[this.state.currentQ]}
  </div>;
return (
  <div>

  <br/>

    <ControlPanel currentQ ={quest} numberOfQuestion = {len} nextButton = {this.nextQ.bind(this)}
    prevButton = {this.prevQ.bind(this)} visibleButton = {this.stateChange.bind(this)}
    vButton = {this.sChange.bind(this)} compButton = {this.compState.bind(this)}
    vcompButton = {this.compChange.bind(this)} addQuest = {this.addQ.bind(this)}
    removeQuest = {this.removeQ.bind(this)}/>,
    <br/>
    <br/>
    <QandAPanel currentQ = {quest} showAnswer = {visibility}/>
    <QuestionCreator addQuest = {this.addQ.bind(this)} list = {listItems} showSection = {this.state.compVisibility}/>
    </div>
)}
}




ReactDOM.render(

    <App />,
  document.getElementById('root')
);
