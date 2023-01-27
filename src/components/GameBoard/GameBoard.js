import { useGameContext } from '../../context/GameContext.js';
import Tile from './Tile/Tile';

import './GameBoard.css';

export default function GameBoard() {
  const { board } = useGameContext();

  return (
    <div className="gameBoard">
      {board.map((tileContent, index) => (
        <Tile key={index} {...{ tileContent }} />
      ))}
    </div>
  );
}
