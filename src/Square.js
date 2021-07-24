import React from "react";

function Square({ value }) {
  // the curly braces are just destructring
  //the values from props passed

  return (
    <button type="button" className="square">
      {value}
    </button>
  );
}

export default Square;
