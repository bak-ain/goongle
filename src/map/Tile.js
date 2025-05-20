import React from 'react';
import { useEffect } from 'react';
import { TileEventImg } from '../img/img';
import './Board.css';

const Tile = ({ tile, eventMode, isMember, onClick }) => {
  const isEvent = tile.type === 'event';
  const isStart = tile.type === 'start';
  const flipClass = eventMode && isEvent ? 'flipped' : '';

  let tileOpacity = 1;

  if (isEvent && !isMember) {
    tileOpacity = 0.2; // 🔹 비회원 이벤트 타일
  } else if (eventMode && !isEvent && !isStart) {
    tileOpacity = 0.5; // 🔹 일반 타일 (event 제외)
  }

  const getModifiedFrontImage = () => {
    if (isEvent && !isMember) {
      switch (tile.id) {
        case 101:
        case 104:
          return TileEventImg.event3;
        case 102:
        case 105:
          return TileEventImg.event1;
        case 103:
        case 106:
          return TileEventImg.event2;
        default:
          return tile.front.image;
      }
    }
    return tile.front.image;
  };

  return (
    <div className="tile-cell" style={{ gridArea: tile.gridArea }}>
      <div
        className={`tile-slot ${tile.type} ${tile.positionClass} tile${tile.id}`}
        style={{
          width: tile.width,
          height: tile.height,
          position: 'absolute',
          opacity: tileOpacity,
          cursor:
            isEvent
              ? 'default'
              : eventMode && !isStart
                ? 'default'
                : 'pointer', // ✅ 포인터 조건 처리 완료
        }}
        onClick={onClick}
      >
        {isEvent ? (
          <div className={`tile-container ${flipClass}`}>
            <div className="tile-inner">
              <div className="tile-front">
                <img src={getModifiedFrontImage()} alt={tile.front.text} />
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
