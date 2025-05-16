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
  const [loginOrigin, setLoginOrigin] = useState(null);
  const [resetYutnoriBtn, setResetYutnoriBtn] = useState(false);
  const [yutChances, setYutChances] = useState(3);
  const [yutClicked, setYutClicked] = useState(false);
  const [yutReady, setYutReady] = useState(false);


  const handleYutnoriClick = (phase) => {
    if (!isMember) {
      setLoginOrigin('yut');
      setShowLoginGuide(true);
      return;
    }

    if (phase === 'start') {
      setEventMode(true);
      setYutReady(true); // 이벤트 모드 진입 후 준비 상태 ON
    } else if (phase === 'play') {
      if (yutReady && yutChances > 0) {
        setTriggerYut(prev => prev + 1);
        setYutChances(prev => prev - 1);
        setYutReady(false); // play 했으면 준비상태 해제
      }
    }
  };

  useEffect(() => {
    if (shouldStartEvent) {
      setEventMode(true);
      setShouldStartEvent(false);
    }
  }, [shouldStartEvent]);

  useEffect(() => {
    if (!isMember && eventMode) {
      setEventMode(false);
    }
  }, [isMember, eventMode]);

  return (
    <div className="Map">
      <Board
        eventMode={eventMode}
        setEventMode={setEventMode}
        triggerYut={triggerYut}
        currentGung={currentGung}
        setShowQuizPopup={setShowQuizPopup}
        setQuizPopupMode={setQuizPopupMode}
        setShowLoginPopup={setShowLoginPopup}
        setLoginOrigin={setLoginOrigin}
        shouldStartQuiz={shouldStartQuiz}
        setShouldStartQuiz={setShouldStartQuiz}
        resetYutnoriBtn={resetYutnoriBtn}
        setResetYutnoriBtn={setResetYutnoriBtn}
        setYutChances={setYutChances}
        setClicked={setYutClicked}
        setYutReady={setYutReady}
      />

      <div className="Map_left">
        <InfoCard eventMode={eventMode} gungId={currentGung} />
        <YutnoriBtn
          isMember={isMember}
          onClick={handleYutnoriClick}
          resetTrigger={resetYutnoriBtn}
          forceClicked={eventMode}
          chances={yutChances}
          setChances={setYutChances}
          clicked={yutClicked}
          setClicked={setYutClicked}
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
