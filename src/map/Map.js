import React, { useState } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import YutnoriBtn from './YutnoriBtn';
import Header from '../components/Header';
import QuizEntryPopup from './QuizEntryPopup';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const Map = ({ isMember, setIsMember }) => {
  const [eventMode, setEventMode] = useState(false);
  const [triggerYut, setTriggerYut] = useState(0);
  const [showLoginGuide, setShowLoginGuide] = useState(false);
  const [showQuizPopup, setShowQuizPopup] = useState(false);
  const [quizPopupMode, setQuizPopupMode] = useState('quiz');
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
      {/* <Header isMember={isMember} /> */}
      <Board eventMode={eventMode} triggerYut={triggerYut} currentGung="gyeongbokgung" setShowQuizPopup={setShowQuizPopup}
        setQuizPopupMode={setQuizPopupMode} />
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
      {showQuizPopup && (
        <QuizEntryPopup
          mode={quizPopupMode}
          onConfirm={() => {
            setShowQuizPopup(false);
            // 퀴즈 팝업이 quiz 모드일 때만 추가 로직 필요 시 여기에
          }}
          onCancel={() => setShowQuizPopup(false)}
        />
      )}
    </div>
  );
};

export default Map;
