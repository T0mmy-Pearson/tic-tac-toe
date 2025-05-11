import React, { useState } from "react";
import Board from "./board";
import "../App.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameStatus, setGameStatus] = useState("Player X's turn");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (index) => {
    if (board[index] || gameStatus !== `Player ${currentPlayer}'s turn`) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setGameStatus(`Player ${currentPlayer} wins!`);
      return;
    }

    if (newBoard.every((cell) => cell)) {
      setGameStatus("It's a draw!");
      return;
    }

    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
    setGameStatus(`Player ${nextPlayer}'s turn`);
  };

  const checkWin = (board) => {
    return winConditions.some((condition) =>
      condition.every((index) => board[index] === currentPlayer)
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameStatus("Player X's turn");
  };

  return (
    <div className="app">
      <h1>XandOs</h1>
      <div className="game-status">{gameStatus}</div>
      <Board board={board} onCellClick={handleCellClick} />
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default Game;