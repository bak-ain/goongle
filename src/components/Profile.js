import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Characters, Icons } from '../img/img';
import { useLogin } from '../LoginContext';
import './Profile.css';

const Profile = ({ onLoginClick, onLogout }) => {
  const { isMember, setIsMember } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    setIsMember(false);
    if (onLogout) onLogout();
    setTimeout(() => {
      alert('로그아웃되었습니다.');
      navigate('/');
    }, 10);
  };

  return (
    <div className="Profile">
      {/* ✅ cha_box 클릭 시 마이페이지 이동 (회원일 때만) */}
      <div
        className={`cha_box ${isMember ? 'member' : 'guest'}`}
        onClick={() => {
          if (isMember) navigate('/mypage');
        }}
      >
        <img
          src={isMember ? Characters.goong1 : Icons.login}
          alt="프로필"
        />
      </div>

      {/* ✅ nickname_box 클릭 시 로그인 또는 로그아웃 */}
      <div
        className="nickname_box"
        onClick={() => {
          if (isMember) {
            handleLogout();
          } else {
            onLoginClick();
          }
        }}
      >
        <span>{isMember ? '로그아웃' : '로그인'}</span>
      </div>
    </div>
  );
};

export default Profile;
