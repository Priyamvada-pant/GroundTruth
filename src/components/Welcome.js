import React, { Component } from 'react';
import Quiz from './Quiz';
import "../Quiz.css"

class Welcome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            level: null,
            num: null
        };
    }
    getLevel = (val) => {
        this.setState({ level: val });
    }

    getQuesNum = (val) => {
        this.setState({ num: val });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={"https://media-exp1.licdn.com/dms/image/C4E0BAQFmIvUn2JMitg/company-logo_200_200/0?e=2159024400&v=beta&t=-TxgHj0zHsBeoJgIry2Wy8N2noV2aD6U2IWnD6iYleU"} className="App-img" alt="img" />
                </div>
                {this.state.level !== null && this.state.num != null ?
                    <Quiz level={this.state.level} num={this.state.num} /> :
                    <div><span>Welcome to the quiz. <br></br>Kindly select the difficulty level and the number of questions.</span>
                        <span>{"Level  "}<select onChange={e => this.getLevel(e.target.value)}>
                            <option value="">--Select--</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        </span>
                        <span>{"Number Of Questions   "}
                            <select onChange={e => this.getQuesNum(e.target.value)}>
                                <option value="">--Select--</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={40}>40</option>
                                <option value={50}>50</option>
                            </select>
                        </span>
                    </div>}
            </div>
        );
    }
}

export default Welcome;