import React, { Component } from 'react';
// //import update from 'react-addons-update';
// import quizQuestions from './api/quizQuestions';
import Question from './Questions';
import Result from './Result';
import '../Quiz.css';
import addUser from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      showResult: false
    };
  }

  setScore = (score) => {
    this.setState({ score: score })
  }



  componentDidMount() {
    this.props.addUserAction(this.props.level, this.props.num);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isSuccess && this.props.isSuccess) {
      this.setState({ questions: this.props.questions, isSuccess: this.props.isSuccess })
    }
  }

  renderResult() {
    return (
      <Result quizResult={this.state.score} />
    );
  }

  showScore() {
    this.setState({ showResult: true })
  }

  renderQuiz() {
    let count = 0;
    return (<div>
      {this.state.questions.map(question =>
        <Question
          sendScore={this.setScore}
          text={question.question}
          questionCount={count += 1}
          answer={question.correct_answer}
        />
      )}
      <div ><button className={"submit"} onClick={() => this.showScore()}>Submit</button></div></div>
    )
  }

  render() {
    return (
      <div>
        {!this.state.showResult ? this.state.isSuccess ? this.renderQuiz() : <span>Loading...</span> : this.renderResult()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addUserAction: addUser,
    },
    dispatch
  );
}

function mapStateToProps(quiz) {
  return {
    isSuccess: quiz && quiz.isSuccess,
    questions: quiz && quiz.questions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

