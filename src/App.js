import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import { calculateWinner } from "./Helpers";
import History from "./History";
import "./Styles/root.scss";
import StatusMessage from "./Styles/StatusMessage";

function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  let current = history[currentMove];

  let { winner, winningSquares } = calculateWinner(current.board);

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

  //function moveTo

  function moveTo(move) {
  
    setCurrentMove(move);
  }

  function reloadGame() {
    setHistory([{ board: Array(9).fill(null), isXNext: true }]);
  

    setCurrentMove(0);
  }

  return (
    // for passing the numbers ,expressions or functions from one component to another
    // we use {} braces

    <div className="app">
      <h1>TIC TAC TOE </h1>
      <StatusMessage winner={winner} current={current} />

      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      ></Board>
      <button type="button" onClick={reloadGame}>
        Start New Game
      </button>
      <History
        history={history}
        moveTo={moveTo}
        currentMove={currentMove}
      ></History>
    </div>
  );
}

export default App;
