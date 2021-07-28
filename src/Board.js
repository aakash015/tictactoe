import React, { useState } from "react";
import Square from "./Square";

// inorder to keep track we need to use states

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  function handleSquareClick(position) {
    if (board[position]) return;
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

  function renderSquare(position) {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
