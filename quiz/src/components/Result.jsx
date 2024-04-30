import React, { Component } from "react";
import './Result.css'

class Result extends Component {
  render() {
    return (
      <div>
        <h1 className="result">Result</h1>
        <div className="score-container">
          <h3>You need more practice.</h3>
          <h2 className="score">Your score is 20%</h2>
          <div>
            <p className="bold">Total number of questions</p>
            <p>15</p>
          </div>
          <div>
            <p className="bold">Number of attempted questions</p>
            <p>9</p>
          </div>
          <div>
            <p className="bold">Number of correct answers</p>
            <p>3</p>
          </div>
          <div>
            <p className="bold">Number of wrong answers</p>
            <p>6</p>
          </div>
        </div>

        <div className="button-container-score">
          <button
            className="play-again-button"
            onClick={this.props.onPlayAgain}
          >
            Play Again
          </button>
          <button
            className="back-button"
            onClick={this.props.onBackToHome}
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }
}

export default Result;