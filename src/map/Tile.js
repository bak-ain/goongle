import React from 'react';
import './Tile.css';

const Tile = ({ tile, eventMode, onClick }) => {
  const isEvent = tile.type === 'event';
  const flipClass = eventMode && isEvent ? 'flipped' : '';

  return (
    <div
      className={`tile-slot ${tile.type}`}
      style={{ width: tile.width, height: tile.height, gridArea: tile.gridArea }}
      onClick={onClick}
    >
      {isEvent ? (
        <div className={`tile-container ${flipClass}`}>
          <div className="tile-inner">
            <div className="tile-front">
              <img src={tile.front.image} alt={tile.front.text} />
              <p>{tile.front.text}</p>
            </div>
            <div className="tile-back">
              <img src={tile.back.image} alt={tile.back.text} />
              <p>{tile.back.text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="tile">
          {tile.image && <img src={tile.image} alt={tile.title} />}
          <p>{tile.title}</p>
        </div>
      )}
    </div>
  );
};

export default Tile;
