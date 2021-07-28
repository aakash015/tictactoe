import React from "react";

const StatusMessage = ({ winner, current }) => {
  console.log("#######");

  const isFilled = current.board.every(function (elem) {
    return elem !== null;
  });

  console.log(winner && `winner`);

  return (
    <h2>
      {winner ? `winner is ${winner}` : ""}
      {!winner && !isFilled
        ? `Next Player is ${current.isXNext ? "X" : "O"}`
        : ""}
      {!winner && isFilled ? "Match Tied" : ""}
    </h2>
  );
};

export default StatusMessage;
