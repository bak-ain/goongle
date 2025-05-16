import React, { useEffect } from 'react';
import { TileEventImg } from '../img/img';
import './YutnoriBtn.css';

const YutnoriBtn = ({
  onClick,
  forceClicked = false,
  onRequireLogin,
  isMember,
  resetTrigger,
  chances,
  setChances,
  clicked,
  setClicked
}) => {
  useEffect(() => {
    setClicked(false);
  }, [resetTrigger]);

  const handleClick = () => {
    if (!isMember) {
      onRequireLogin && onRequireLogin();
      return;
    }

    if (!clicked && !forceClicked) {
      setClicked(true);
      onClick('start'); // setYutReady(true) 도 함께 실행됨
      return;
    }

    // 이후 play는 Map에서 yutReady && yutChances > 0일 때만 진행되므로 여긴 그대로
    onClick('play');
  };



  const isEventStarted = clicked || forceClicked;

  return (
    <button
      className="YutnoriBtn"
      onClick={handleClick}
      disabled={isMember && clicked && chances === 0}// 버튼은 기회 0이면 비활성화
    >
      {!isMember && (
        <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
      )}

      {isMember && !isEventStarted && (
        <>
          <span className="h2">윷놀이<br />시작</span>
          <img src={TileEventImg.yutStart} alt="윷놀이" className="yut-img" />
        </>
      )}

      {isMember && isEventStarted && (
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
