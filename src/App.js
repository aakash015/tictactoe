import React from "react";
import "./App.css";
import Board from "./Board";
import "./Styles/root.scss";
function App() {
  return (
    // for passing the numbers ,expressions or functions from one component to another
    // we use {} braces

    <div className="app">
      <h1>TIC TAC TOE </h1>
      <Board></Board>
    </div>
  );
}

export default App;
