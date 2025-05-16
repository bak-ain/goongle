import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLogin } from '../LoginContext';
import GiveNip from './GiveNip';
import Character from './Character';
import MovingBtn from './MovingBtn';
import CenterWrap from './CenterWrap';
import Tile from './Tile';
import Quiz from './Quiz';
import QuizEntryPopup from './QuizEntryPopup';
import { startTile, mapTilesByGung, quizTile, eventTiles } from '../utils';
import { quizData } from "../utils";
import './Board.css';



const Board = ({
  eventMode,
  triggerYut,
  currentGung,
  setShowQuizPopup,
  setQuizPopupMode,
  shouldStartQuiz,
  setShouldStartQuiz,
  setShowLoginPopup,
  onQuizConfirm,
}) => {
  const mapTiles = mapTilesByGung[currentGung] || []; // 기본값 처리
  const tileData = [
    startTile,
    ...mapTiles,
    { ...quizTile, gungId: currentGung },
    ...eventTiles
  ];

  const { isMember } = useLogin();
  const { state } = useLocation();
  const returnToTileId = state?.returnToTileId;
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const startIndex = tileData.findIndex(tile => tile.type === 'start');
  const [position, setPosition] = useState(startIndex);
  const [prevEventMode, setPrevEventMode] = useState(false); // 이전값 추적용
  const [resetYutItem, setResetYutItem] = useState(false);
  const navigate = useNavigate();
  const [nipCount, setNipCount] = useState(0);
  const [giveNipVisible, setGiveNipVisible] = useState(false);
  const [giveAmount, setGiveAmount] = useState(1);
  const [justEarned, setJustEarned] = useState(false);
  const [isMoving, setIsMoving] = useState(false); // ✅ 이동 중 여부

  useEffect(() => {
    if (returnToTileId) {
      const targetIndex = tileData.findIndex(t => t.id === returnToTileId);
      if (targetIndex !== -1) setPosition(targetIndex);

      // ✅ URL의 state를 초기화하여 새로고침 시 영향을 없애기
      navigate('/', { replace: true }); // ← state 제거용
    }
  }, [returnToTileId, navigate]);



  // ✅ eventMode가 false → true로 바뀌는 순간 캐릭터 위치 초기화
  useEffect(() => {
    if (!prevEventMode && eventMode) {
      // 이벤트모드 진입 시
      setPosition(startIndex);
    } else if (prevEventMode && !eventMode) {
      // 이벤트모드 종료 시
      setPosition(startIndex);
    }

    setPrevEventMode(eventMode);
  }, [eventMode, prevEventMode, startIndex]);


  const moveToTile = (targetIndex, tileType, tileDataObj) => {
    if (targetIndex === position) {
      openTile(tileType, tileDataObj);
      return;
    }

    let current = position;

    const step = () => {
      current = (current + 1) % tileData.length;

      while (tileData[current].type === 'event') {
        current = (current + 1) % tileData.length;
      }

      setPosition(current);

      if (current !== targetIndex) {
        setTimeout(step, 300);
      } else {
        setTimeout(() => openTile(tileType, tileDataObj), 300);
      }
    };

    step();
  };

  const openTile = (type, tile) => {
    if (type === 'quiz') {

      if (!isMember) {
        setQuizPopupMode('login');
        setShowQuizPopup(true);
        return;
      }

      setQuizPopupMode('quiz');
      setShowQuizPopup(true);
      return;
    }


    else if (type === 'event') {
      const randomAmount = Math.floor(Math.random() * 3) + 1; // 1~3
      setNipCount(prev => prev + randomAmount);
      setGiveAmount(randomAmount);
      setGiveNipVisible(true);
    } else if (type === 'default' && tile.gungId) {
      navigate(`/gung/${tile.gungId}`, {
        state: { fromTileId: tile.id }
      });
    }
  };

  const handleClick = (tile) => {
    if (tile.type === 'event' || tile.type === 'start') return;

    const targetIndex = tileData.findIndex(t => t.id === tile.id);

    if (targetIndex === position) {
      // ✅ 이미 도착한 위치라면 즉시 실행
      openTile(tile.type, tile);
      return;
    }

    // ✅ 아니면 이동부터
    moveToTile(targetIndex, tile.type, tile);
  };


  const handleMove = (direction) => {
    if (eventMode || isMoving) return; // ✅ 이동 중이면 무시

    const len = tileData.length;
    let newPos = position;

    do {
      newPos = direction === 'right'
        ? (newPos + 1) % len
        : (newPos - 1 + len) % len;
    } while (tileData[newPos].type === 'event');

    setIsMoving(true); // ✅ 이동 시작 표시
    setPosition(newPos);

    const targetTile = tileData[newPos];
    if ((targetTile.type === 'default' && targetTile.gungId) || targetTile.type === 'quiz') {
      setTimeout(() => {
        openTile(targetTile.type, targetTile);
        setIsMoving(false); // ✅ 페이지 이동 후 다시 이동 가능
      }, 800); // 자연스러운 이동 효과
    } else {
      setTimeout(() => setIsMoving(false), 800);
    }
  };




  const moveByYutResult = (result) => {
    const steps = {
      doo: 1,
      gae: 2,
      gul: 3,
      yut: 4,
      mo: 5,
      backdo: -1
    };

    const moveCount = steps[result];
    if (moveCount == null) return;

    const isForward = moveCount > 0;
    const absMove = Math.abs(moveCount);

    let current = position;
    let moved = 0;

    // ✅ 1. 윷 아이템 보여주고 1초 후에 이동 시작
    setTimeout(() => {
      const step = () => {
        do {
          current = isForward
            ? (current + 1) % tileData.length
            : (current - 1 + tileData.length) % tileData.length;
        } while (tileData[current].type !== 'event');

        moved++;
        setPosition(current);

        if (moved < absMove) {
          setTimeout(step, 300);
        } else {
          // ✅ 2. 도착한 타일 열기
          setTimeout(() => {
            openTile(tileData[current].type, tileData[current]);
          }, 300);
        }
      };

      step();
    }, 1000); // ✅ 이동 딜레이 1초
  };
  useEffect(() => {
    if (shouldStartQuiz) {
      const randomQuiz = getRandomQuiz();
      if (randomQuiz) {
        setCurrentQuiz(randomQuiz);
        setShowQuiz(true);
      }
      // 부모 상태 초기화 요청 (필수!)
      setShouldStartQuiz(false); // ❗ 부모 상태도 초기화돼야 함
    }
  }, [shouldStartQuiz]);

  const getRandomQuiz = () => {
    const quizList = quizData[currentGung];
    if (!quizList || quizList.length === 0) return null;
    return quizList[Math.floor(Math.random() * quizList.length)];
  };


  return (
    <div className='Board'>
      <div className='mapArea'>
        <CenterWrap eventMode={eventMode} triggerYut={triggerYut} onYutResult={moveByYutResult} resetYutItem={resetYutItem} />
        <div className="tile_wrap">
          {tileData.map(tile => (
            <Tile
              key={tile.id}
              tile={tile}
              eventMode={eventMode}
              isMember={isMember}
              onClick={() => handleClick(tile)}
            />
          ))}
          <Character tile={tileData[position]} eventMode={eventMode} />
        </div>
      </div>

      <MovingBtn onMove={handleMove} />
      {showQuiz && currentQuiz && (
        <Quiz
          questionData={currentQuiz}
          onClose={() => {
            setShowQuiz(false);
            if (justEarned) {
              setTimeout(() => {
                setGiveNipVisible(true);
                setJustEarned(false);
              }, 100);
            }
          }}
          onCorrect={() => {
            const fixedAmount = 1;
            setNipCount(prev => prev + fixedAmount);
            setGiveAmount(fixedAmount);
            setJustEarned(true);
          }}
        />
      )}

      {giveNipVisible && (
        <GiveNip
          amount={giveAmount}
          total={nipCount}
          onClose={() => setGiveNipVisible(false)}
        />
      )}
    </div>
  );
};

export default Board;
