import './Tile.css';

export default function Tile({ tileContent }) {
  return (
    <div className="tile">
      <h1>{tileContent}</h1>
    </div>
  );
}
