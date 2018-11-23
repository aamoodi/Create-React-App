import React from 'react';

import './index.css';

import QandA from './QandA.json';


class QandAPanel extends React.Component {
  constructor(props) {
      super(props);


  }

  render() {
    let listItems = QandA.map(function(Qdetails, i){
      return <li> {Qdetails.question}</li>;
    });
    let listItems1 = QandA.map(function(Adetails,i){
      return <li> {Adetails.answer}</li>
    });

    let contents = <div>

      {listItems[this.props.currentQ-1]}
       {listItems1[this.props.currentQ-1]}

   </div>;
   let content = <div>

      {listItems[this.props.currentQ-1]}


  </div>;
   if(this.props.showAnswer){

    return contents
}
    else{
      return content;
    }
  }
}
export {QandAPanel};
