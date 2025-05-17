import React from 'react';
import './MovingBtn.css'; // 버튼 스타일 정의
import { M_btn } from '../img/img';

const MovingBtn = ({ onMove }) => {
  return (
    <div className="MovingBtn">
      <button className='left' onClick={() => onMove('left')}>
        <img src={M_btn.left_btn} alt="왼쪽 이동"className='front' />
        <img src={M_btn.left_btnB} alt="왼쪽 이동" className='back'/>
      </button>
      <button className='right' onClick={() => onMove('right')}>
        <img src={M_btn.right_btn} alt="오른쪽 이동" className='front'/>
        <img src={M_btn.right_btnB} alt="오른쪽 이동" className='back' />
      </button>
    </div>
  );
};

export default MovingBtn;
