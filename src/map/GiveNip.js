import { useState } from 'react';
import React from 'react';
import './GiveNip.css';
import { Characters } from '../img/img';
import { Icons } from '../img/img';

const GiveNip = ({ amount, onClose, total }) => {
  return (
    <div className="GiveNip">
      <div className="nip-content">
        <div className="nip-subcontent">

          <div className='leftcontent'>
          <div className='imageall'>
        <img src={Characters.goong1} alt="캐릭터" className="char" />
        <img src={Icons.nipcoin} alt="캐릭터" className="char" />
          </div>
        <p className="count">현재 보유한 닢 : {total}닢</p>
          </div>
          
        <div className="textall">
        <h2 className="title">얼~쑤!</h2>
        <p className="subtitle">{amount}닢 드리오~!</p>
        </div>

        </div>
        <button className="exit" onClick={onClose}>나가기</button>
      </div>
    </div>
  );
};

export default GiveNip;