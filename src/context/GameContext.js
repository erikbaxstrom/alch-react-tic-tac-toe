import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', 'O', 'X', 'O', '', '', '', '', 'X']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState("O's turn");
  const [active, setActive] = useState(false);

  const tileClickHandler = (index) => {
    // console.log('handling click on', index);
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
    // console.log('put', currentPlayer, 'in', index);
    // switch player
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  };

  const resetClickHandler = () => {
    // console.log('resetting game');
    setBoard(['', '', '', '', '', '', '', '', '']);
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
