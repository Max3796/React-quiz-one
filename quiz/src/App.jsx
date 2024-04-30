import React, { Component } from "react";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }

  navigateToQuiz = () => {
    this.setState({ currentPage: "quiz" });
  };

  navigateToHome = () => {
    this.setState({ currentPage: "home" });
  };

  navigateToScore = () => {
    this.setState({ currentPage: "score" });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {currentPage === "home" && (
          <HomeComponent onPlay={this.navigateToQuiz} />
        )}
        {currentPage === "quiz" && (
          <QuizComponent onQuit={this.navigateToScore} />
        )}
        {currentPage === "score" && (
          <Result
            onPlayAgain={this.navigateToQuiz}
            onBackToHome={this.navigateToHome}
          />
        )}
      </div>
    );
  }
}

export default App;