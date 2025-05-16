import React from 'react';
import './Board.css';

const Tile = ({ tile, eventMode, isMember, onClick }) => {
  const isEvent = tile.type === 'event';
  const isStart = tile.type === 'start';
  const flipClass = eventMode && isEvent ? 'flipped' : '';

  // ✅ opacity 조건 분기
  let tileOpacity = 1;

  if (eventMode) {
    if (isEvent && !isMember) {
      tileOpacity = 0.2; // 🔹 비회원용 이벤트 타일
    } else if (!isEvent && !isStart) {
      tileOpacity = 0.5; // 🔹 일반 타일 (quiz, default 등)
    }
  }

  return (
    <div className="tile-cell" style={{ gridArea: tile.gridArea }}>
      <div
        className={`tile-slot ${tile.type} ${tile.positionClass} tile${tile.id}`}
        style={{
          width: tile.width,
          height: tile.height,
          position: 'absolute',
          opacity: tileOpacity, // 🔸 적용!
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
