import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GnbItem.css';

const GnbItem = ({ icon, label, to, isConditional, isMember,setIsMember }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // 🔸 로그아웃 처리
    if (label === '로그아웃') {
      localStorage.removeItem('userToken');
      setIsMember(false);
      alert('로그아웃되었습니다.');
      navigate('/'); // 또는 원하는 페이지로
      return;
    }

    // 🔸 조건 분기 이동 (ex. 지도 → 회원/비회원)
    if (isConditional) {
      navigate(isMember ? '/member' : '/non-member');
    } else {
      navigate(to);
    }
  };

  return (
    <li className="GnbItem">
      <a href={to} onClick={handleClick} className="gnb_link">
        <img src={icon} alt={`${label} 아이콘`} className="gnb_icon" />
        <span className="gnb_label">{label}</span>
      </a>
    </li>
  );
};

export default GnbItem;
