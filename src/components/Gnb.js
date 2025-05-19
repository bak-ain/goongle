import React from 'react';
import { useState } from 'react';
import GnbItem from './GnbItem';
import { Icons } from '../img/img';
// import './Gnb.css';

const GUNG_LIST = [
  { id: 'gyeongbokgung', label: '경복궁', icon: Icons.gnb1, iconOn: Icons.gnb1On },
  { id: 'gyeonghuigung', label: '경희궁', icon: Icons.gnb2, iconOn: Icons.gnb2On },
  { id: 'changdeokgung', label: '창덕궁', icon: Icons.gnb3, iconOn: Icons.gnb3On },
  { id: 'changgyeonggung', label: '창경궁', icon: Icons.gnb4, iconOn: Icons.gnb4On },
  { id: 'deoksugung', label: '덕수궁', icon: Icons.gnb5, iconOn: Icons.gnb5On },
];

const Gnb = ({ currentGung, setCurrentGung }) => {
  const [coinClicked, setCoinClicked] = useState(false);
  return (
    <ul className="Gnb">
      {GUNG_LIST.map((gung) => (
        <GnbItem
          key={gung.id}
          icon={currentGung === gung.id ? gung.iconOn : gung.icon}
          label={gung.label}
          isActive={currentGung === gung.id}
          onClick={() => { setCurrentGung(gung.id); setCoinClicked(false); }}
          className={gung.id} // ✅ 각 궁 id를 className으로 전달
        />
      ))}

      {/* <li className="divider" /> */}

      <GnbItem
        icon={coinClicked ? Icons.coinOn : Icons.coin}
        label="궁글 닢"
        isActive={coinClicked}
        onClick={() => {
          setCoinClicked(true);
          setCurrentGung(null);
        }}
        className="Nip"
      >
        {/* 🧾 서브메뉴 예시 */}
        <ul className="sub_list">
          <li>닢제도 가이드</li>
          <li>닢 교환권</li>
          <li>닢 제휴처</li>
        </ul>
      </GnbItem>

    </ul>
  );
};

export default Gnb;
