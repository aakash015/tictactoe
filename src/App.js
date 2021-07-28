import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import { calculateWinner } from "./helpers";
import "./Styles/root.scss";

function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  let current = history[currentMove];

  console.log(history);

  let winner = "";

  winner = calculateWinner(current.board);
  const message = winner
    ? `winner is ${winner}`
    : `Next Player is ${current.isXNext ? "X" : "O"}`;
  console.log(message);
  // console.log(winner);
  function handleSquareClick(position) {
    if (current.board[position] || winner) return;

    setHistory(function (prev) {
      const newBoard = prev[prev.length - 1].board.map((elem, pos) => {
        if (pos === position) {
          return prev[prev.length - 1].isXNext ? "X" : "O";
        } else {
          return elem;
        }
      });

      return prev.concat({
        board: newBoard,
        isXNext: !prev[prev.length - 1].isXNext,
      });
    });

    setCurrentMove((prev) => prev + 1);
  }

  return (
    // for passing the numbers ,expressions or functions from one component to another
    // we use {} braces

    <div className="app">
      <h1>TIC TAC TOE </h1>
      <h2>{message}</h2>
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
      ></Board>
    </div>
  );
}

export default App;
