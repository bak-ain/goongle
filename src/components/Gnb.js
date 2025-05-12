import React from 'react';
import GnbItem from './GnbItem';
import { Icons } from '../img/img';
import './Gnb.css';

const Gnb = () => {
  const isMember = Boolean(localStorage.getItem('userToken'));

  return (
    <ul className="Gnb">
      <GnbItem
        icon={Icons.mapPin}
        label="Map"
        to="/map"
        isConditional
        isMember={isMember}
      />

      <GnbItem
        icon={Icons.login}
        label={isMember ? '로그아웃' : '로그인'}
        to={isMember ? '/logout' : '/login'}
      />

      {!isMember && (
        <GnbItem icon={Icons.join} label="회원가입" to="/signup" />
      )}

      <GnbItem icon={Icons.coin} label="궁글 닢" to="/coin" />

      <GnbItem icon={Icons.event} label="이벤트" to="/event" />
    </ul>
  );
};

export default Gnb;
