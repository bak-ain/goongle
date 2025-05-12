import React, { useMemo } from 'react';
import { Characters } from '../img/img';
import './Character.css';

const Character = ({ tile }) => {
  const gridArea = tile.gridArea;

  const randomCharacter = useMemo(() => {
    const keys = Object.keys(Characters);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return Characters[randomKey];
  }, []);

  return (
    <div className="Character" style={{ gridArea, zIndex: 10 }}>
      <img src={randomCharacter} alt="캐릭터" />
    </div>
  );
};

export default Character;
