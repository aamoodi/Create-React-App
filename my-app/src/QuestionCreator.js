import React from 'react';

import './index.css';

import QandA from './QandA.json';

class QuestionCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div>
      <h3> Create Q&A </h3>
      <form >
      <button onClick={this.props.nextButton}>Add Q & A</button>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

      </form></div>
    );
  }
}
export {QuestionCreator};
