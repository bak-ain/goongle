import React from 'react';
import { useState, useEffect } from 'react';
import { TileEventImg } from '../img/img';
import './YutnoriBtn.css';

const YutnoriBtn = ({
  onClick,
  onRequireLogin,
  isMember,
  chances,
  clicked,
  setClicked,
  eventMode // 👈 추가됨
}) => {

   const [showIntroText, setShowIntroText] = useState(false);

  // 회원 전환 시 span에 효과
  useEffect(() => {
    if (isMember && !eventMode) {
      setShowIntroText(true);
      setTimeout(() => {
        setShowIntroText(false); // 효과 한 번만
      }, 400);
    }
  }, [isMember, eventMode]);

  const handleClick = () => {
    if (!isMember) {
      onRequireLogin?.();
      return;
    }

    if (chances <= 0) {
      return;
    }

    if (!eventMode) {
      setClicked(true); // 첫 클릭 상태 기억
      onClick('start');
      return;
    }

    onClick('play');
  };

  return (
    <button className={eventMode ? 'YutnoriBtn on' : 'YutnoriBtn'} onClick={handleClick}>
      {!isMember && (
        <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
      )}

      {isMember && !eventMode && (
        <>
          <span className={`h2 ${showIntroText ? 'fade-in' : ''}`}>윷놀이<br />시작</span>
          <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
        </>
      )}

      {isMember && eventMode && (
        <>
          <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img centered" />
          <div className="event-text">
            <p className="click-label s">클릭!</p>
            <p className="chance p">남은 기회 : {chances}회</p>
          </div>
        </>
      )}
    </button>
  );
};

export default YutnoriBtn;
