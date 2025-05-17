// ✅ Gnb.js: 궁 5개 + 궁글닢만 표시

import React from 'react';
import GnbItem from './GnbItem';
import { Icons } from '../img/img';
import './Gnb.css';

const GUNG_LIST = [
  { id: 'gyeongbokgung', label: '경복궁', icon: Icons.gnb1, iconOn: Icons.gnb1On },
  { id: 'gyeonghuigung', label: '경희궁', icon: Icons.gnb2, iconOn: Icons.gnb2On },
  { id: 'changdeokgung', label: '창덕궁', icon: Icons.gnb3, iconOn: Icons.gnb3On },
  { id: 'changgyeonggung', label: '창경궁', icon: Icons.gnb4, iconOn: Icons.gnb4On },
  { id: 'deoksugung', label: '덕수궁', icon: Icons.gnb5, iconOn: Icons.gnb5On },
];

const Gnb = ({ currentGung, setCurrentGung }) => {
  return (
    <ul className="Gnb">
      {GUNG_LIST.map((gung) => (
        <GnbItem
          key={gung.id}
          icon={currentGung === gung.id ? gung.iconOn : gung.icon}
          label={gung.label}
          isActive={currentGung === gung.id}
          onClick={() => setCurrentGung(gung.id)}
          className={gung.id} // ✅ 각 궁 id를 className으로 전달
        />
      ))}

      {/* <li className="divider" /> */}

      <GnbItem icon={Icons.coin} label="궁글 닢" onClick={() => alert('궁글 닢 페이지로 이동')} />
    </ul>
  );
};

export default Gnb;
