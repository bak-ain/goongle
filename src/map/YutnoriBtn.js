import React from 'react';
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
  const handleClick = () => {
    if (!isMember) {
      onRequireLogin?.();
      return;
    }

    if (chances <= 0) {
      console.log('❌ chances 소진됨');
      return;
    }

    if (!eventMode) {
      console.log('🟢 START 버튼 클릭');
      setClicked(true); // 첫 클릭 상태 기억
      onClick('start');
      return;
    }

    console.log('🎯 PLAY 버튼 클릭');
    onClick('play');
  };

  return (
    <button className="YutnoriBtn" onClick={handleClick}>
      {!isMember && (
        <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
      )}

      {isMember && !eventMode && (
        <>
          <span className="h2">윷놀이<br />시작</span>
          <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
        </>
      )}

      {isMember && eventMode && (
        <>
          <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img centered" />
          <div className="event-text">
            <p className="click-label">클릭!</p>
            <p className="chance">남은 기회 : {chances}회</p>
          </div>
        </>
      )}
    </button>
  );
};

export default YutnoriBtn;
