import React, { useMemo } from 'react';
import { Characters } from '../img/img';
import './Character.css';

const Character = ({ tile }) => {
  const { gridArea, top = '0', left = '0' } = tile;

  const randomCharacter = useMemo(() => {
    const keys = Object.keys(Characters);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return Characters[randomKey];
  }, []);

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
        <img src={randomCharacter} alt="캐릭터" />
      </div>
    </div>
  );
};

export default Character;
