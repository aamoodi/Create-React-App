import React from 'react';

import './index.css';

import QandA from './QandA.json';
import {ControlPanel} from './ControlPanel';


class App extends React.Component {

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
    if(this.state.answerVisibility){
      this.state.answerVisibility = false;
    }else{
      this.state.answerVisibility = true;
    }
  }
  constructor(props) {
      super(props);
      this.state = {currentQ: 0,answerVisibility:true, currentPool: QandA}
  }
    render(){
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
<ControlPanel name ={this.current}currentQ ={"this.currentQ"} numberOfQuestion = {this.currentPool.length} nextButton = {this.nextQ}/>,
  contents)}
}
// function App(props) {
//   return <div>
//   {QandA.map((QDetails,index) =>{
//     return <div>
//     <p>{QDetails.question}</p>
//     <p>{QDetails.answer}</p>
//     </div>
//    })}
//
//   </div>;
// }

export {App};
