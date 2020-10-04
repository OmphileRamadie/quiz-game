import React, { Component } from "react"; // This import statement allows access to the React library
import GameVerdict from "./GameVerdict"; // Importing the GameVerdict component

export default class GameOver extends Component {
  // Stateless component declaration
  render() {
    //Destructuring the props
    const { score, QuizData, playAgain } = this.props;

    return (
      <div>
        <div className="gameOver">
          <h2>Game Over</h2>

          {/* This heading 4 element displays the final score for the user */}
          <h4>
            Your final score is : {score} / {QuizData.length}
          </h4>

          {/* This component takes in the score as a prop and returns a verdict for the user */}
          <GameVerdict score={score} />

          <p>The correct answers for the questions were: </p>

          {/*Mapping through the quiz data and returning only the correct answers
          in the form of list items in an unordered list. The key of the list items
          is set to the index of each list item */}
          <ul className="answers">
            {QuizData.map((item, index) => (
              <li className="correctAnswers" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>

          {/* The Play Again button which invokes a method called playAgain*/}
          <button onClick={playAgain} className="ui button olive playAgainBtn">
            Play Again
          </button>
        </div>
      </div>
    );
  }
}
