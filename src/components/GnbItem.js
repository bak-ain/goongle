import React from 'react';
import './GnbItem.css';

const GnbItem = ({ icon, label, onClick, isActive, className }) => {
  return (
    <li className={`GnbItem ${isActive ? 'on' : ''} ${className || ''}`} onClick={onClick}>
      <button className="gnb_link">
        <img src={icon} alt={`${label} 아이콘`} className="gnb_icon" />
        <span className="gnb_label">{label}</span>
      </button>
    </li>
  );
};

export default GnbItem;
