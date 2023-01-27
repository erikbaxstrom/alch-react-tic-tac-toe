import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '1', '2', '3', '', '5', '', '7', '8']);
  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be within a GameProvider');
  }

  return context;
};

export { useGameContext, GameProvider };
