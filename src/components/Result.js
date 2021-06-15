import React from "react";

const Result = ({ score, playAgain, total }) => (
  <div className="score-board">
    <div className="score">
      You scored {score} / {total} correct answers!
    </div>
    <a className="playBtn" href="/" >
      Play again!
    </a>

  </div>
);

export default Result;
