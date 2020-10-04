import React, { Component } from "react";
import { QuizData } from "./QuizData";
import GameOver from "./GameOver";
import QuizSection from "./QuizSection";
import ButtonSection from "./ButtonSection";
import Play from "./Play";
import Rules from "./Rules";

export default class Quiz extends Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true,
    quizStarted: false,
    rules: false,
  };

  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        question: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answer: QuizData[currentQuestion].answer,
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestionHandler = () => {
    const { score, userAnswer, answer } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          question: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answer: QuizData[currentQuestion].answer,
        };
      });
    }
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    const { score, userAnswer, answer, currentQuestion } = this.state;
    if (currentQuestion === QuizData.length - 1) {
      this.setState({ quizEnd: true });
    }

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  playAgain = () => {
    this.setState({
      quizEnd: false,
      currentQuestion: 0,
      score: 0,
      quizStarted: false,
    });
    this.loadQuiz();
  };

  StartGame = () => {
    this.setState({
      quizStarted: true,
    });
  };

  quitGame = () => {
    alert(
      "You quit the game, Your score is:" +
        " " +
        this.state.score +
        "/" +
        QuizData.length
    );
    this.setState({
      quizEnd: false,
      currentQuestion: 0,
      score: 0,
      quizStarted: false,
    });
  };

  getRules = () => {
    this.setState({
      rules: true,
    });
  };

  closeRules = () => {
    const { rules } = this.state;
    this.setState({
      rules: !rules,
    });
  };

  render() {
    const {
      question,
      options,
      currentQuestion,
      userAnswer,
      quizEnd,
      quizStarted,
      score,
      disabled,
      rules,
    } = this.state;

    if (quizEnd) {
      return (
        <GameOver
          score={score}
          QuizData={QuizData}
          currentQuestion
          playAgain={this.playAgain}
        />
      );
    } else if (!quizStarted) {
      return <Play startGame={this.StartGame} />;
    } else {
      return (
        <div>
          <div className="quizSection">
            <QuizSection
              question={question}
              options={options}
              currentQuestion={currentQuestion}
              userAnswer={userAnswer}
              checkAnswer={this.checkAnswer}
              QuizData={QuizData}
            />
          </div>
          <div className="rulesSection">
            {" "}
            <Rules rules={rules} closeRules={this.closeRules} />
          </div>
          <div className="buttonSection">
            <ButtonSection
              QuizData={QuizData}
              disabled={disabled}
              currentQuestion={currentQuestion}
              quitGame={this.quitGame}
              getRules={this.getRules}
              finishHandler={this.finishHandler}
              nextQuestionHandler={this.nextQuestionHandler}
            />
          </div>
        </div>
      );
    }
  }
}
