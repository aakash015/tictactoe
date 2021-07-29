import React from "react";

const StatusMessage = ({ winner, current }) => {
  console.log("#######");

  const isFilled = current.board.every(function (elem) {
    return elem !== null;
  });

  console.log(winner && `winner`);

  return (
    <div className="status-message">
      {winner && 
      <>
      winner is <span className = { winner==='X'?'text-green':'text-orange'}>{winner}</span>
      </>
      }
      
      {!winner && !isFilled && 
      <> 
      Next Player is <span className = {current.isXNext?'text-green':'text-orange'}>
        {current.isXNext?'X':'O'}</span>
      </>
     }
{!winner&&isFilled &&
   <>
      <span>The match is Tied</span>
   </>
}
    </div>
  );
};

export default StatusMessage;
