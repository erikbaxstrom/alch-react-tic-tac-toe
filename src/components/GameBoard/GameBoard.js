import { useGameContext } from '../../context/GameContext.js';
import Tile from './Tile/Tile';
export default function GameBoard() {
  const { board } = useGameContext();

  return (
    <div>
      {board.map((tileContent, index) => (
        <Tile key={index} {...{ tileContent }} />
      ))}
    </div>
  );
}
