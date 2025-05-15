import React from 'react';
// import './GiveNip.css';
import { Characters } from '../img/img';

const GiveNip = ({ amount, onClose }) => {
  return (
    <div className="GiveNip">
      <div className="nip-content">
        <img src={Characters.goong1} alt="캐릭터" className="char" />
        <div className="coin"></div> {/* 닢 이미지 or 배경 */}
        <p className="count">현재 보유한 닢 : {amount}닢</p>
        <h2 className="title">얼~쑤!</h2>
        <p className="subtitle">{amount}닢 드리오~!</p>
        {/* <div className="buttons">
          <button onClick={onClose}>윷던지기</button>
          <button onClick={onClose}>다른 정보탐험</button>
          <button onClick={onClose}>닢 사용하기</button>
        </div> */}
        <button className="exit" onClick={onClose}>나가기</button>
      </div>
    </div>
  );
};

export default GiveNip;
