import React, { Component } from "react"; // This import statement allows access to the React library
import student from "./student.png"; // Importing the student picture

export default class Play extends Component {
  render() {
    //Destructuring the props
    const { startGame } = this.props;
    return (
      <div className="startGame">
        <h3>Welcome to the General knowledge Quiz Game </h3>

        <div>
          {/*An Animated image of a student taking a quiz */}
          <img src={student} alt="student" width={200} height={200} />
        </div>

        {/*A start Game button which invokes a method called startGame */}
        <button onClick={startGame} className="ui button  olive startGameBtn">
          Start Game
        </button>

        {/*A set of game rules */}
        <div className="rulesContainer">
          <h5>Rules</h5>
          <ol>
            <li>
              In order for you to win the game, you have to answer more than 7
              questions correctly, if you answer them correctly, you win a R1000
              gift voucher for you to spend at Statiic Online Store.
            </li>
            <li>
              Once you press next, you can not go back to the previous question
              so think your answers through
            </li>
            <li>Most importantly, Have Fun :)</li>
          </ol>
        </div>
      </div>
    );
  }
}
