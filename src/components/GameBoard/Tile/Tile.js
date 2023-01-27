import { useGameContext } from '../../../context/GameContext.js';

import './Tile.css';

export default function Tile({ tileContent, index }) {
  const { active } = useGameContext();
  return (
    <div
      className={`tile ${!active && 'disableClick'}`}
      onClick={() => {
        console.log('clicked!', index);
      }}
    >
      <h1>{tileContent}</h1>
    </div>
  );
}
