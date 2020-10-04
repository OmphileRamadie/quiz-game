import React, { Component } from "react"; // This import statement allows access to the React library

export default class Rules extends Component {
  // Stateless component declaration
  render() {
    const { rules, closeRules } = this.props; //Destructuring the props

    if (rules) {
      //Checking if the rules prop is true, if it is true, this component returns
      //the rules
      return (
        <div className="rules">
          {/*A set of game rules */}
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
          <button onClick={closeRules}>x</button>
          {/*A button that is used to close the Rules component. When the button is clicked
           a function is invoked which sets the state of the rules state to false */}
        </div>
      );
    } else return ""; //If the rules prop is false, this component returns an empty string
  }
}
