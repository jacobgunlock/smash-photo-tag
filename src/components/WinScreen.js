import React from "react";

const WinScreen = (props) => {
  const styling = {
    color: "white",
    height: "100vh",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styling}>
      <h2>Game Over!</h2>
      <div style={{}}>
        <p>Your Time Was {props.timer.seconds}s</p>
        <button onClick={props.resetGame}>Play Again?</button>
      </div>
      <div>
        <h2>Leaderboard</h2>
        <ul>
          <li>Jacob: 1:00</li>
          <li>Ben: 2:22</li>
          <li>Allie: 3:20</li>
        </ul>
      </div>
    </div>
  );
};

export default WinScreen;
