import React, { useState, useEffect, useRef } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import YutnoriBtn from './YutnoriBtn';
import QuizEntryPopup from './QuizEntryPopup';
import LoginPopup from '../components/LoginPopup';
import { useLogin } from '../LoginContext';
import './Map.css';

const Map = ({ currentGung, setCurrentGung ,eventMode, setEventMode  }) => {
  const { isMember } = useLogin();
  const [triggerYut, setTriggerYut] = useState(0);
  const [showLoginGuide, setShowLoginGuide] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showQuizPopup, setShowQuizPopup] = useState(false);
  const [quizPopupMode, setQuizPopupMode] = useState('quiz');
  const [shouldStartQuiz, setShouldStartQuiz] = useState(false);
  const [shouldStartEvent, setShouldStartEvent] = useState(false);
  const [loginOrigin, setLoginOrigin] = useState(null);
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
      console.log('🟢 START 버튼 클릭');
      setEventMode(true);
      setYutReady(true);
      setYutClicked(true);
      return;
    }

    if (phase === 'play') {
    
      if (yutReady && yutChances >= 0) {
    

       setTriggerYut(Math.random().toString(36).substring(2, 5)); // 매번 다른 문자열

        setYutChances(prev => {
          const next = Math.max(prev - 1, 0);
      

          if (next === 0) {
            console.log('🚫 기회 소진 → eventMode OFF');
            setEventMode(false);
          }

          return next;
        });

        setYutReady(false);
        setYutClicked(false);
      }
    }
  };


  const handleYutReset = () => {
    setYutReady(false);
    setYutClicked(false);
  };

  useEffect(() => {
    if (shouldStartEvent) {
      setEventMode(true);
      setYutReady(true);
      setYutClicked(true);
      setShouldStartEvent(false);
    }
  }, [shouldStartEvent]);

  useEffect(() => {
    if (!isMember && eventMode) {
      setEventMode(false);
    }
  }, [isMember, eventMode]);
  const [isReenterFromGiveNip, setIsReenterFromGiveNip] = useState(false);

  useEffect(() => {
    if (isReenterFromGiveNip) {
      setYutClicked(false);
      setYutReady(false);
      setIsReenterFromGiveNip(false);
    }
  }, [isReenterFromGiveNip]);


  return (
    <div className="Map">
      <Board
        eventMode={eventMode}
        setEventMode={setEventMode}
        triggerYut={triggerYut}
        currentGung={currentGung}
        setCurrentGung={setCurrentGung}
        setShowQuizPopup={setShowQuizPopup}
        setQuizPopupMode={setQuizPopupMode}
        setShowLoginPopup={setShowLoginPopup}
        setLoginOrigin={setLoginOrigin}
        shouldStartQuiz={shouldStartQuiz}
        setShouldStartQuiz={setShouldStartQuiz}
        onResetYut={handleYutReset}
        isReenterFromGiveNip={isReenterFromGiveNip}
        setIsReenterFromGiveNip={setIsReenterFromGiveNip}
      />

      <div className="Map_left">
        <InfoCard eventMode={eventMode} gungId={currentGung} />
        <YutnoriBtn
          isMember={isMember}
          onClick={handleYutnoriClick}
          chances={yutChances}
          clicked={yutClicked}
          eventMode={eventMode}
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
