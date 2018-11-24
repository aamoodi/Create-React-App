import React from 'react';

import './index.css';


class QuestionCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', listDemo: this.props.list};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A value was submitted: ' + this.state.value);
    this.props.list[4] =this.state.value;
    event.preventDefault();
  }

  render() {
    if(this.props.showSection){
    return (
      <div>
      <h3> Create Q&A </h3>
      <form >
      <button onClick={this.props.addQuest}>Add Question</button> <br/>
          <textarea type="text" value={this.state.value} onChange={this.handleChange} /><br /> <br />
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
      {this.state.value}
      </div>
    );}
    else {
      return null;
    }
  }
}
export {QuestionCreator};
