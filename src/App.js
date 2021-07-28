import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import { calculateWinner } from "./helpers";
import "./Styles/root.scss";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  // console.log("board rendered");

  const [isXNext, setIsXNext] = useState(true);

  let winner = "";

  winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "O"}`;
  console.log(message);
  // console.log(winner);
  function handleSquareClick(position) {
    if (board[position] || winner) return;

    setBoard(function (prev) {
      return prev.map((elem, pos) => {
        if (position === pos && isXNext) {
          setIsXNext(false);
          return "X";
        } else if (position === pos && !isXNext) {
          setIsXNext(true);
          return "O";
        } else return elem;
      });
    });
  }

  return (
    // for passing the numbers ,expressions or functions from one component to another
    // we use {} braces

    <div className="app">
      <h1>TIC TAC TOE </h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
}

export default App;
