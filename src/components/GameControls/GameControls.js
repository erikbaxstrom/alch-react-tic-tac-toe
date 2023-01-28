import { useGameContext } from '../../context/GameContext.js';

import './GameControls.css';

export default function GameControls() {
  const { gameMessage, active, resetClickHandler } = useGameContext();
  return (
    <div>
      <p>{gameMessage}</p>
      <button className={`${active && 'hidden'}`} onClick={resetClickHandler}>
        Restart Game
      </button>
    </div>
  );
}
