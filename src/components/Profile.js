import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Characters, Icons } from '../img/img'; // ← Icons 추가
import { useLogin } from '../LoginContext';
import './Profile.css';

const Profile = ({ onLoginClick, onLogout }) => {
  const { isMember, setIsMember } = useLogin();
  const navigate = useNavigate();

const handleClick = () => {
  if (isMember) {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    setIsMember(false);
    if (onLogout) onLogout();
    
    // 알림을 따로 분리
    setTimeout(() => {
      alert('로그아웃되었습니다.');
      navigate('/');
    }, 10);
  } else {
    onLoginClick();
  }
};

  return (
    <div className="Profile" >
      <div className={`cha_box ${isMember ? 'member' : 'guest'}`}>
        <img
          src={isMember ? Characters.goong1 : Icons.login} // ✅ 조건부 이미지
          alt="프로필"
        />
      </div>
      <div className="nickname_box" onClick={handleClick}>
        <span>{isMember ? '로그아웃' : '로그인'}</span>
      </div>
    </div>
  );
};

export default Profile;
