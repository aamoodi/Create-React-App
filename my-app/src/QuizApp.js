import React from 'react';
import questions from './QandA.json';
import {App} from './Question';

class QuizApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentQ: 0, currentPool: questions}
    }
    nextQ() {
        let currentQ = this.state.currentQ + 1;
        currentQ %= this.state.currentPool.length;
        this.setState({currentQ: currentQ});
    }

    randomQ() {
        let currentQ = Math.floor(Math.random()* this.state.currentPool.length);
        this.setState({currentQ: currentQ});
    }

    render() {
        let mcQ = this.state.currentPool[this.state.currentQ];
        let buttonBar = <div>
                <button onClick={this.nextQ.bind(this)}>Next Question</button>
                <button onClick={this.randomQ.bind(this)}>Random Question</button>
            </div>;
        let contents = <div><h1>React Quiz-o-Matic</h1>
                {buttonBar}
                <App multiQuestion={mcQ} />
            </div>;
        return contents;
    }
}

export {QuizApp};
