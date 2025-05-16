import React, { useState, useEffect } from 'react';
import { TileEventImg } from '../img/img';
import { useLogin } from '../LoginContext';
import './YutnoriBtn.css';

const YutnoriBtn = ({ onClick, forceClicked = false, onRequireLogin }) => {
  const { isMember } = useLogin();
  const [clicked, setClicked] = useState(false);
  const [chances, setChances] = useState(3); // 윷놀이 남은 기회 수

  const handleClick = () => {
    if (!isMember) {
      onRequireLogin && onRequireLogin(); // 🔹 비회원이면 로그인 안내 요청
      return;
    }

    if (!clicked && !forceClicked) {
      setClicked(true);
      onClick(); // 처음 진입: 이벤트모드 시작
    } else {
      if (chances > 0) {
        setChances(prev => prev - 1);
        onClick(); // 이벤트모드 중: 윷던지기
      }
    }
  };

  const isEventStarted = clicked || forceClicked;

  return (
    <button className="YutnoriBtn" onClick={handleClick}>
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
