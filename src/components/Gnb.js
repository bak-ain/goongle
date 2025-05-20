import React, { useState } from 'react';
import GnbItem from './GnbItem';
import { Icons } from '../img/img';
import { useNavigate, useLocation } from 'react-router-dom';

const GUNG_LIST = [
  { id: 'gyeongbokgung', label: '경복궁', icon: Icons.gnb1, iconOn: Icons.gnb1On },
  { id: 'gyeonghuigung', label: '경희궁', icon: Icons.gnb2, iconOn: Icons.gnb2On },
  { id: 'changdeokgung', label: '창덕궁', icon: Icons.gnb3, iconOn: Icons.gnb3On },
  { id: 'changgyeonggung', label: '창경궁', icon: Icons.gnb4, iconOn: Icons.gnb4On },
  { id: 'deoksugung', label: '덕수궁', icon: Icons.gnb5, iconOn: Icons.gnb5On },
];

const Gnb = ({ currentGung, setCurrentGung, onItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isNipPage = currentPath.startsWith('/nip');
  const currentGungFromURL = currentPath.startsWith('/map/') ? currentPath.split('/')[2] : null;

  const activeGung = currentGungFromURL || currentGung; // ✅ 우선순위: URL → props fallback

  const handleMove = (path) => {
    navigate(path);
    if (onItemClick) onItemClick();
  };

  return (
    <ul className="Gnb">
      {GUNG_LIST.map((gung) => (
        <GnbItem
          key={gung.id}
          icon={activeGung === gung.id ? gung.iconOn : gung.icon}
          label={gung.label}
          isActive={activeGung === gung.id}
          onClick={() => handleMove(`/map/${gung.id}`)}
          className={gung.id}
        />
      ))}
      <GnbItem
        icon={isNipPage ? Icons.coinOn : Icons.coin}
        label="궁글 닢"
        isActive={isNipPage}
        onClick={() => handleMove('/nip-guide')}
        className="Nip"
        enableToggle={true}
      >
        <ul className="sub_list">
          <li onClick={() => handleMove('/nip-guide')}>닢제도 가이드</li>
          <li onClick={() => handleMove('/nip-change')}>닢 교환권</li>
          <li onClick={() => handleMove('/nip-partner')}>닢 제휴처</li>
        </ul>
      </GnbItem>
    </ul>
  );
};



export default Gnb;
