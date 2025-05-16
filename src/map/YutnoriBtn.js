import React, { useState, useEffect } from 'react';
import { TileEventImg } from '../img/img';
import { useLogin } from '../LoginContext';
import './YutnoriBtn.css';

const YutnoriBtn = ({ onClick, forceClicked = false, onRequireLogin, isMember ,resetTrigger  }) => {
  // const { isMember } = useLogin();
  const [clicked, setClicked] = useState(false);
  const [chances, setChances] = useState(3); // 윷놀이 남은 기회 수

  
  useEffect(() => {
    // 🔁 외부에서 trigger 들어오면 초기화
    setClicked(false);
    setChances(3);
  }, [resetTrigger]);

  const handleClick = () => {
    if (!isMember) {
      onRequireLogin && onRequireLogin();
      return;
    }

    if (!clicked && !forceClicked) {
      setClicked(true);
      onClick('start'); // 🔹 Map에게 이벤트모드 ON 요청
      return;
    }

    if ((clicked || forceClicked) && chances > 0) {
      setChances(prev => prev - 1);
      onClick('play'); // 🔹 Map에게 윷놀이 요청
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
