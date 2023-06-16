import React, { useState } from "react";

import Board from "../components/Board";

const Game = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [nextIsX, setNextIsX] = useState(true);

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
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
      <div className="game">
        <div className="game-board">
          <Board square={square} nextIsX={nextIsX} handleClick={handleClick} />
        </div>
        <div className="game-info">
          <ol>
            {/*something*/}
          </ol>
        </div>
      </div>
    </>
  );
};

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }

  return null;
}

export default Game;
