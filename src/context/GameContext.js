import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', 'O', 'X', 'O', '', '', '', '', 'X']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState("X's turn");
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider value={{ board, setBoard, currentPlayer, gameMessage, active }}>
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
