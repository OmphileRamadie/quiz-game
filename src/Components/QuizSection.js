import React, { Component } from "react"; // This import statement allows access to the React library

export default class QuizSection extends Component {
  // Stateless component declaration

  render() {
    const {
      //Destructuring the props
      question,
      options,
      currentQuestion,
      userAnswer,
      QuizData,
      checkAnswer,
    } = this.props;
    return (
      <div className="quizSection">
        {/*This heading 3 element displays the current question */}
        <h3 className="question">{question} </h3>

        {/* This span element displays the number of the current question out of the number of questions */}
        <span>{`Question ${currentQuestion + 1}  of ${QuizData.length}`}</span>

        {/*Mapping through the array of the multiple choice answers and returning a 
        paragraph element for each multiple choice answers. The key of each answer is
        set to the answer itself. The paragraph element has an onClick event listener, when
        a multiple choice answer is clicked on, the state of userAnswer is set to the multiple
        choice answer and a class name 'selected' is added to that answer which makes the
        selected answer to have a different background color from the rest of the answers. 
         */}
        {options.map((option) => {
          return (
            <p
              key={option}
              className={`ui floating message options
                ${userAnswer === option ? "selected" : null}`}
              onClick={() => checkAnswer(option)}
            >
              {option}
            </p>
          );
        })}
      </div>
    );
  }
}
