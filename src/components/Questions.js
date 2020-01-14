import React, { Component } from 'react';
import "../Quiz.css"
let selectedOptions = [];
let score = 0;

class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: true,
        };
    }

    handleOptionChange = (changeEvent) => {
        selectedOptions[changeEvent.target.name - 1] = changeEvent.target.value;
        this.setState({ selectedOptions });
        if (selectedOptions[changeEvent.target.name - 1] === this.props.answer.toLowerCase()) {
            score++;
            this.sendData();
        }
    }

    sendData = () => {
        this.props.sendScore(score);
    }

    render() {
        return (
            <div >
                <h2 className="questionCount"> Question {this.props.questionCount}</h2>
                <div className="question">{this.props.text}</div>
                <input
                    type="radio"
                    className="radioCustomButton"
                    name={this.props.questionCount}
                    id="radioGroup"
                    value={true}
                    checked={this.state.selectedOptions && this.state.selectedOptions[this.props.questionCount - 1] === "true"}
                    onChange={this.handleOptionChange}
                    disabled={this.state.selectedOptions && this.state.selectedOptions[this.props.questionCount - 1]}
                />
                <label className="radioCustomLabel">
                    Yes </label>

                <input
                    type="radio"
                    className="radioCustomButton"
                    name={this.props.questionCount}
                    id="radioGroup"
                    value={false}
                    onChange={this.handleOptionChange}
                    disabled={this.state.selectedOptions && this.state.selectedOptions[this.props.questionCount - 1]}
                    checked={this.state.selectedOptions && this.state.selectedOptions[this.props.questionCount - 1] === "false"}
                />
                <label className="radioCustomLabel">No</label>
            </div>
        );
    }
}

export default Question;
