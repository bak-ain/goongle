import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Characters, Icons } from '../img/img'; // ← Icons 추가
import { useLogin } from '../LoginContext';
import './Profile.css';

const Profile = ({ onLoginClick }) => {
  const { isMember, setIsMember } = useLogin();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isMember) {
      localStorage.removeItem('userToken');
      sessionStorage.removeItem('userToken');
      setIsMember(false);
      alert('로그아웃되었습니다.');
      navigate('/');
    } else {
      onLoginClick(); // 로그인 팝업 호출
    }
  };

  return (
    <div className="Profile" >
      <div className="cha_box">
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
