import Tile from './Tile/Tile';
export default function GameBoard() {
  const board = ['Y', 'booger', '', 'something else'];
  return (
    <div>
      {board.map((tileContent, index) => (
        <Tile key={index} {...{ tileContent }} />
      ))}
    </div>
  );
}
