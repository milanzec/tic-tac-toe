import { useState } from "react";
import "./App.css";

import Square from "./components/Square";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [nextIsX, setNextIsX] = useState(true);

  function handleClick(i) {
    const nextSquare = square.slice();
    if (nextIsX) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setNextIsX(!nextIsX);
  }

  return (
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        <Square value={square[9]} onSquareClick={() => handleClick(9)} />
      </div>
    </>
  );
}
