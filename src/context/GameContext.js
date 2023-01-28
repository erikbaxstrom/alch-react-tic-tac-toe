import { useState, createContext, useContext, useEffect } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState("X's turn. Click to start.");
  const [active, setActive] = useState(true);

  const checkWinner = () => {
    // if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
    //   return board[0];
    // } else {
    //   return;
    // }
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
    ];
    let winner = null;
    if (
      winConditions.some((condition) => {
        const [a, b, c] = condition;
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
          winner = board[a];
          return true;
        }
      })
    ) {
      return winner;
    }
  };

  const checkGameStatus = () => {
    if (!active) return;
    // console.log('checking game status');
    //check for new game
    if (board.every((tileContent) => tileContent === '')) {
      return;
    }
    //check for cats game
    if (board.every((tileContent) => tileContent !== '')) {
      //   console.log('cat');
      setGameMessage("Cat's Game");
      setActive(false);
      return;
    }
    //check for winner
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`${winner} won!`);
      setActive(false);
    }
    // return;
  };

  checkGameStatus();

  //   useEffect(() => {
  //     setGameMessage(`${currentPlayer} Turn`);
  //   }, [currentPlayer]);

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

    if (!active) {
      //   console.log('inactive game. returning');
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

    // console.log('Message set to', currentPlayer);
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
