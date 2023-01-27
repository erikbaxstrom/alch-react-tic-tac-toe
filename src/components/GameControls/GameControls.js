import { useGameContext } from '../../context/GameContext.js';

import './GameControls.css';

export default function GameControls() {
  const { gameMessage, active } = useGameContext();
  return (
    <div>
      <p>{gameMessage}</p>
      {/* <button className={active ? 'hidden' : ''}>Restart Game</button> */}
      <button
        className={`${active && 'hidden'}`}
        onClick={() => {
          console.log('clicked reset');
        }}
      >
        Restart Game
      </button>
    </div>
  );
}
