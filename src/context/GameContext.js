import { useState, createContext, useContext, useEffect } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState("X's turn. Click to start.");
  const [active, setActive] = useState(true);

  const checkWinner = () => {
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
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
        return board[a];
      }
    }
    return;
  };

  const checkGameStatus = () => {
    if (!active) return;
    //check for winner
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`${winner} won!`);
      setActive(false);
      //   return;
    }
    //check for cats game
    if (!board.includes('')) {
      setGameMessage("Cat's Game");
      setActive(false);
      return;
    }
  };

  checkGameStatus();

  const tileClickHandler = (index) => {
    // if the tile is filled, return
    if (board[index] !== '') {
      return;
    }
    // if the game is inactive, return
    if (!active) {
      return;
    }
    // otherwise, put the currentPlayer in the tile
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (!active) {
      return;
    }
    // switch player
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage("O's Turn");
    } else {
      setCurrentPlayer('X');
      setGameMessage("X's Turn");
    }
  };

  const resetClickHandler = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setGameMessage("X's Turn");
    setActive(true);
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        gameMessage,
        active,
        tileClickHandler,
        resetClickHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be within a GameProvider');
  }

  return context;
};

export { useGameContext, GameProvider };
