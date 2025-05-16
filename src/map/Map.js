import React, { useState, useEffect } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import YutnoriBtn from './YutnoriBtn';
import QuizEntryPopup from './QuizEntryPopup';
import LoginPopup from '../components/LoginPopup';
import { useLogin } from '../LoginContext';
import './Map.css';

const Map = ({ currentGung, setCurrentGung }) => {
  const { isMember } = useLogin();
  const [eventMode, setEventMode] = useState(false);
  const [triggerYut, setTriggerYut] = useState(0);
  const [showLoginGuide, setShowLoginGuide] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showQuizPopup, setShowQuizPopup] = useState(false);
  const [quizPopupMode, setQuizPopupMode] = useState('quiz');
  const [shouldStartQuiz, setShouldStartQuiz] = useState(false);
  const [shouldStartEvent, setShouldStartEvent] = useState(false);
  const [loginOrigin, setLoginOrigin] = useState(null); // 'yut' | 'quiz'

  const handleYutnoriClick = () => {
    if (!isMember) {
      setLoginOrigin('yut');
      setShowLoginGuide(true);
      return;
    }
    if (!eventMode) {
      setEventMode(true);
    } else {
      setTriggerYut(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (shouldStartEvent) {
      setEventMode(true);
      setShouldStartEvent(false);
    }
  }, [shouldStartEvent]);
  // 🔸 로그아웃 시 자동으로 이벤트모드 종료
  useEffect(() => {
    if (!isMember && eventMode) {
      setEventMode(false);
    }
  }, [isMember, eventMode]);


  return (
    <div className="Map">
      <Board
        eventMode={eventMode}
        triggerYut={triggerYut}
        currentGung={currentGung}
        setShowQuizPopup={setShowQuizPopup}
        setQuizPopupMode={setQuizPopupMode}
        setShowLoginPopup={setShowLoginPopup}
        setLoginOrigin={setLoginOrigin}
        shouldStartQuiz={shouldStartQuiz}
        setShouldStartQuiz={setShouldStartQuiz}
      />

      <div className="Map_left">
        <InfoCard eventMode={eventMode} gungId="gyeongbokgung" />
        <YutnoriBtn
          isMember={isMember}
          onClick={handleYutnoriClick}
          forceClicked={eventMode}
          onRequireLogin={() => {
            setLoginOrigin('yut');
            setShowLoginGuide(true);
          }}
        />

      </div>

      {showLoginGuide && (
        <QuizEntryPopup
          mode="login"
          onConfirm={() => {
            setShowLoginGuide(false);
            setShowLoginPopup(true);
          }}
          onCancel={() => setShowLoginGuide(false)}
        />
      )}

      {showQuizPopup && (
        <QuizEntryPopup
          mode={quizPopupMode}
          onConfirm={() => {
            setShowQuizPopup(false);
            if (quizPopupMode === 'quiz') {
              setShouldStartQuiz(true);
            } else if (quizPopupMode === 'login') {
              setLoginOrigin('quiz');
              setShowLoginPopup(true);
            }
          }}
          onCancel={() => setShowQuizPopup(false)}
        />
      )}

      {showLoginPopup && (
        <LoginPopup
          onClose={() => {
            setShowLoginPopup(false);
            if (loginOrigin === 'yut') {
              setShouldStartEvent(true);
            } else if (loginOrigin === 'quiz') {
              setQuizPopupMode('quiz');
              setShowQuizPopup(true);
            }
            setLoginOrigin(null);
          }}
        />
      )}
    </div>
  );
};

export default Map;
