import React, { Component } from "react"; // This import statement allows access to the React library

export default class GameVerdict extends Component {
  render() {
    //Destructuring the props
    const score = this.props.score;

    //Checking if the score is greater than 7 and returning a Winning message if it is true
    if (score > 7) {
      return (
        <div className="verdictHeading">
          <h1 className="ui header green">
            Congradulations, You Won The Voucher :)
          </h1>
        </div>
      );
    } else {
      // if its not true it returns a Losing message
      return (
        <div className="verdictHeading">
          <h1 className="ui header red">Unfortunately you did not win :(</h1>
        </div>
      );
    }
  }
}
