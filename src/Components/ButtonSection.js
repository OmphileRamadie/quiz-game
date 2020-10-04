import React, { Component } from "react"; // This import statement allows access to the React library

export default class ButtonSection extends Component {
  // Stateless component declaration
  render() {
    const {
      //Destructuring the props
      currentQuestion,
      QuizData,
      nextQuestionHandler,
      disabled,
      finishHandler,
      quitGame,
      getRules,
    } = this.props;
    return (
      <div className="buttonSection">
        <div className="nextBtnContainer">
          {/* 
           The Next button is returned only if the currentQuestion index is smaller
           than the number of questions minus 1. So the next button is only returned
           only until the second last question.The next button invokes a method called
           nextQuestionHandler */}
          {currentQuestion < QuizData.length - 1 && (
            <button
              onClick={nextQuestionHandler}
              disabled={disabled}
              className="ui button grey nextBtn"
            >
              Next
            </button>
          )}

          {/*The Finish button is returned only when the currentQuestion index is
          equals to the number of questions. So the finish button is only returned
          on the last question. The finish button invokes a  method called finishHandler */}
          {currentQuestion === QuizData.length - 1 && (
            <button
              onClick={finishHandler}
              className="ui button olive basic finishBtn"
            >
              Finish
            </button>
          )}
        </div>

        <div className="quitBtnContainer">
          {/*The Quit button is returned from the first question to the last question.
          The quit button invokes a method called quitGame */}
          {currentQuestion < QuizData.length && (
            <button onClick={quitGame} className="ui button  basic red quitBtn">
              Quit Game
            </button>
          )}

          {/*The Rules button is returned from the first question to the last question.
          The rules button invokes a method called getRules */}
          <button
            className="ui button basic orange rulesBtn"
            onClick={getRules}
          >
            Rules
          </button>
        </div>
      </div>
    );
  }
}
