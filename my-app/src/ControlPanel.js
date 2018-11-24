import React from 'react';

import './index.css';


class ControlPanel extends React.Component {

render() {
  console.log(this.props);
  let buttonBar = <div>
            <button onClick={this.props.nextButton}>Next Question</button>
            <button onClick={this.props.prevButton}>Previous Question</button>
            <button onClick={this.props.visibleButton}>Show Answer</button>
            <button onClick={this.props.vButton}>Hide Answer</button>
            <p> Question {this.props.currentQ} of {this.props.numberOfQuestion}</p>
        </div>;
        return buttonBar
}
}

export {ControlPanel};
