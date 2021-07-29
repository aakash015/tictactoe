import React from "react";

function Square({ value, onClick,isWinningSquares }) {
  
  // console.log(isWinningSquares);

  return (
    <button type="button" className="square" onClick={onClick}
     style = {{fontWeight : isWinningSquares?'bold':'normal'}}
    >
      {value}
    </button>
  );
}

export default Square;
