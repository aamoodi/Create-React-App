import React from 'react';

import './index.css';

import QandA from './QandA.json';


class QandAPanel extends React.Component {
  constructor(props) {
      super(props);
      this.answerVisible = this.props.showAnswer;

  }
  render() {
    let listItems = QandA.map(function(Qdetails, i){
      return <li> {Qdetails.question}</li>;
    });
    let listItems1 = QandA.map(function(Adetails,i){
      return <li> {Adetails.answer}</li>
    });

    let contents = <div>


       {listItems1[this.props.currentQ-1]}

   </div>;
   let content = <div>

      {listItems[0]}


  </div>;
   if(this.props.showAnswer){

    return contents
}
    else{
      return null;
    }
  }
}
export {QandAPanel};
