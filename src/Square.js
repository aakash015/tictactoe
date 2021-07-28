import React from "react";

function Square({ value, onClick }) {
  // the curly braces are just destructring
  //the values from props passed

  // console.log(children);
  // console.log("square rendered");
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
