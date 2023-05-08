import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

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
  ])
  
  const winningSquareIndex = 3
  const losingSquareIndex = 6

  const handleClick = (selectedIndex) => {
    const newBoard = [...board]
    if (selectedIndex === winningSquareIndex) {
      newBoard[selectedIndex] = "💰" // update to treasure emoji
    } else if (selectedIndex === losingSquareIndex) {
      newBoard[selectedIndex] = "💣" // update to bomb emoji
    } else {
      newBoard[selectedIndex] = "🌳" // update to tree emoji
    }
    setBoard(newBoard)
  }
  

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board}
      handleClick={handleClick}/>
    </>
  )
}

export default App
