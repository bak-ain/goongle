import React, { useMemo } from 'react';
import { Characters } from '../img/img';
import './Character.css';

const Character = ({ tile, eventMode }) => {
  const { gridArea, top = '0', left = '0' } = tile;

  const characterImage = useMemo(() => {
    if (eventMode) {
      return Characters['gle3']; // ✅ 이벤트 맵일 때는 gle3 고정
    }

    // ✅ eventMode가 false일 때는 gle3 제외하고 랜덤
    const keys = Object.keys(Characters).filter(key => key !== 'gle3');
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return Characters[randomKey];
  }, [eventMode]);

  return (
    <div className="Character_wrapper" style={{ gridArea }}>
      <div
        className="Character"
        style={{
          position: 'absolute',
          top,
          left,
          zIndex: 10
        }}
      >
        <img src={characterImage} alt="캐릭터" />
      </div>
    </div>
  );
};

export default Character;
