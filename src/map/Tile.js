import React from 'react';
import './Board.css';


const Tile = ({ tile, eventMode, onClick }) => {
  const isEvent = tile.type === 'event';
  const flipClass = eventMode && isEvent ? 'flipped' : '';

  return (
    <div className="tile-cell" style={{ gridArea: tile.gridArea }}>
      <div
        className={`tile-slot ${tile.type} ${tile.positionClass} tile${tile.id}`}
        style={{
          width: tile.width,
          height: tile.height,
          position: 'absolute', 
        }}
        onClick={onClick}
      >
        {isEvent ? (
          <div className={`tile-container ${flipClass}`}>
            <div className="tile-inner">
              <div className="tile-front">
                <img src={tile.front.image} alt={tile.front.text} />
              </div>
              <div className="tile-back">
                <img src={tile.back.image} alt={tile.back.text} />
              </div>
            </div>
          </div>
        ) : (
          <div className="tile">
            {tile.image && <img src={tile.image} alt={tile.title} />}
          </div>
        )}
      </div>
    </div>
  );
};


export default Tile;
