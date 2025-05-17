import React, { useMemo } from 'react';
import { Characters } from '../img/img';
import './Character.css';

const Character = ({ tile, characterKey, eventMode }) => {
  const { gridArea, top = '0', left = '0' } = tile;

  const characterImage = useMemo(() => {
    if (eventMode) return Characters['gle3'];       // 이벤트 모드 고정 캐릭터
    return Characters[characterKey];                // 전달받은 키 기반 캐릭터
  }, [eventMode, characterKey]);

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
