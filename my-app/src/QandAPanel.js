import React from 'react';

import './index.css';

import QandA from './QandA.json';


class QandAPanel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {answerVisible:true}
  }
  render() {
    let listItems = QandA.map(function(Qdetails, i){
      return <li> {Qdetails.question}</li>;
    });
    let listItems1 = QandA.map(function(Adetails,i){
      return <li> {Adetails.answer}</li>
    });

    let contents = <div>

       {listItems[0]}
       {listItems1[0]}

   </div>;
   let content = <div>

      {listItems[0]}


  </div>;
   if(this.state.answerVisible){
    return contents}
    else{
      return content;
    }
  }
}
export {QandAPanel};
