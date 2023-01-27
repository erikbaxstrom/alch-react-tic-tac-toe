import { useGameContext } from '../../../context/GameContext.js';

import './Tile.css';

export default function Tile({ tileContent, index }) {
  const { active, tileClickHandler } = useGameContext();
  return (
    <div
      className={`tile ${!active && 'disableClick'}`}
      onClick={() => {
        tileClickHandler(index);
      }}
    >
      <h1>{tileContent}</h1>
    </div>
  );
}
