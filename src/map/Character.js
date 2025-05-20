import React, { useEffect, useMemo, useState } from 'react';
import { Characters } from '../img/img';
import './Character.css';

const Character = ({ tile, characterKey, eventMode }) => {
  const isMobile = window.innerWidth <= 430;
  const { gridArea, top = '0', left = '0' } = tile;

  const characterImage = useMemo(() => {
    if (eventMode) return Characters['gle3'];
    return Characters[characterKey];
  }, [eventMode, characterKey]);

  // ✅ 점프 애니메이션 + 말풍선 상태
  const [jumping, setJumping] = useState(false);
  const [speech, setSpeech] = useState('');

  useEffect(() => {
    setJumping(true);
    const sayings = ['가보자고!', '으쌰!', '출동~', '고고!', '슝~'];
    setSpeech(sayings[Math.floor(Math.random() * sayings.length)]);

    const jumpTimeout = setTimeout(() => setJumping(false), 500);
    const speechTimeout = setTimeout(() => setSpeech(''), 1000);

    return () => {
      clearTimeout(jumpTimeout);
      clearTimeout(speechTimeout);
    };
  }, [tile.id]); // ✅ tile이 바뀔 때마다 트리거

  return (
    <div className="Character_wrapper" style={{ gridArea }}>
      <div
        className={`Character ${jumping ? 'jump' : ''}`}
        style={{
          position: 'absolute',
          top: isMobile ? tile.topMobile || top : top,
          left: isMobile ? tile.leftMobile || left : left,
          zIndex: 10,
        }}
      >
        <img src={characterImage} alt="캐릭터" />
        {speech && <div className="speech-bubble">{speech}</div>}
      </div>
    </div>
  );
};

export default Character;
