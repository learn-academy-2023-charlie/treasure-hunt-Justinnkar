import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]);
  const [remainingGuesses, setRemainingGuesses] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const winningSquareIndex = Math.floor(Math.random() * board.length);
  const losingSquareIndex = Math.floor(Math.random() * board.length);

  const handleClick = (selectedIndex) => {
    if (gameOver) return; // game is over
    const newBoard = [...board];
    let updatedGuesses = remainingGuesses;

    if (selectedIndex === winningSquareIndex) {
      newBoard[selectedIndex] = "💰";
      setGameOver(true);
      alert("You won the game!"); // display message to user
    } else if (selectedIndex === losingSquareIndex) {
      newBoard[selectedIndex] = "💣";
      setGameOver(true);
      alert("You lost the game!"); // display message to user
    } else {
      newBoard[selectedIndex] = "🌳";
      updatedGuesses -= 1;
      if (updatedGuesses === 0) {
        setGameOver(true);
        alert("You lost the game!"); // display message to user
      }
    }

    setBoard(newBoard);
    setRemainingGuesses(updatedGuesses);
  };

  const resetGame = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ]);
    setRemainingGuesses(5);
    setGameOver(false);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick} />
      {gameOver && <button onClick={resetGame}>Play Again</button>}
      <p>Remaining Guesses: {remainingGuesses}</p>
    </>
  );
};

export default App;
