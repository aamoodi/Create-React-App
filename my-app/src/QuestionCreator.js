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
    alert('A name was submitted: ' + this.state.value);

    this.props.list[4] =this.state.value;
    for(var i =0 ; i<4 ;i++){
    alert("value of list is "+this.state.listDemo.length);}

    event.preventDefault();
  }

  render() {
    return (
      <div>
      <h3> Create Q&A </h3>
      <form >
      <button onClick={this.handleSubmit}>Add Q & A</button><br/><br/>

          <textarea type="text" value={this.state.value} onChange={this.handleChange} /><br /> <br />
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />

      </form>
      {this.state.value}
      </div>
    );
  }
}
export {QuestionCreator};
