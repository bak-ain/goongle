import React, { useState } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import YutnoriBtn from './YutnoriBtn';
import Header from '../components/Header';
import QuizEntryPopup from './QuizEntryPopup';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const Map = () => {
  const [eventMode, setEventMode] = useState(false);
  const [triggerYut, setTriggerYut] = useState(0);
  const [showLoginGuide, setShowLoginGuide] = useState(false);
  const isMember = !!localStorage.getItem('userToken');
  const navigate = useNavigate();

  const handleYutnoriClick = () => {
    if (!isMember) {
      setShowLoginGuide(true); // 비회원일 경우 로그인 안내
      return;
    }

    if (!eventMode) {
      setEventMode(true);
    } else {
      setTriggerYut(prev => prev + 1);
    }
  };



  return (
    <div className="Map">
      <Header />
      <Board eventMode={eventMode} triggerYut={triggerYut} currentGung="gyeongbokgung" />
      <div className='Map_left'>
        <InfoCard eventMode={eventMode} gungId="gyeongbokgung" />
        <YutnoriBtn onClick={handleYutnoriClick} />
      </div>
      {showLoginGuide && (
        <QuizEntryPopup
          mode="login"
          onConfirm={() => {
            setShowLoginGuide(false);
            navigate('/login'); // 로그인 페이지로 이동
          }}
          onCancel={() => setShowLoginGuide(false)}
        />
      )}

    </div>
  );
};

export default Map;
