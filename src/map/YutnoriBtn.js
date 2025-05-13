import React, { useState } from 'react';
import { TileEventImg } from '../img/img';
import './YutnoriBtn.css';

const YutnoriBtn = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();           // 부모에서 setEventMode(true) 실행
    setClicked(true);    // 로컬 상태로 텍스트 제거 등 처리
  };

  return (
    <button className="YutnoriBtn" onClick={handleClick}>
      {!clicked && (
        <span className="h2">윷놀이<br />시작</span>
      )}
      <img src={TileEventImg.yutStart} alt="윷놀이" className={clicked ? 'centered' : ''} />
    </button>
  );
};


export default YutnoriBtn;
