import GameBoard from './components/GameBoard/GameBoard.js';
import GameControls from './components/GameControls/GameControls.js';
import './App.css';

function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <GameControls />
      <GameBoard />
    </>
  );
}

export default App;
