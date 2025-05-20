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
import { Characters } from '../img/img';
import { quizData } from "../utils";
import './Board.css';

const Board = ({
  eventMode,
  setEventMode,
  triggerYut,
  currentGung,
  setCurrentGung,
  setShowQuizPopup,
  setQuizPopupMode,
  shouldStartQuiz,
  setShouldStartQuiz,
  onResetYut,
  isReenterFromGiveNip,
  setIsReenterFromGiveNip
}) => {
  const { isMember } = useLogin();
  const { state } = useLocation();
  const navigate = useNavigate();
  const returnToTileId = state?.returnToTileId;
  const returnToGungId = state?.returnToGungId;
  const returnToCharacterKey = state?.returnToCharacterKey;

  const mapTiles = mapTilesByGung[currentGung] || [];
  const tileData = [startTile, ...mapTiles, { ...quizTile, gungId: currentGung }, ...eventTiles];
  const startIndex = tileData.findIndex(tile => tile.type === 'start');

  const [position, setPosition] = useState(startIndex);
  const [prevEventMode, setPrevEventMode] = useState(false);
  const [nipCount, setNipCount] = useState(0);
  const [giveAmount, setGiveAmount] = useState(1);
  const [giveNipVisible, setGiveNipVisible] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [justEarned, setJustEarned] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [pendingQuizTile, setPendingQuizTile] = useState(null);

  const characterKeys = Object.keys(Characters).filter(k => k !== 'gle3' && k !== 'goong4');

  const [characterKey, setCharacterKey] = useState(() => {
    return characterKeys[Math.floor(Math.random() * characterKeys.length)];
  });

  useEffect(() => {
    if (returnToCharacterKey) {
      setCharacterKey(returnToCharacterKey);
    }
  }, [returnToCharacterKey]);
  useEffect(() => {
    if (!returnToCharacterKey) {
      const newKey = characterKeys[Math.floor(Math.random() * characterKeys.length)];
      setCharacterKey(newKey);
    }
  }, [currentGung]);

  useEffect(() => {
    if (returnToGungId && returnToGungId !== currentGung) {
      setCurrentGung(returnToGungId);
    }
  }, [returnToGungId]);

  useEffect(() => {
    if (!isMember) {
      setPosition(startIndex);
    }
  }, [isMember, startIndex]);

  useEffect(() => {
    setPosition(startIndex);
  }, [currentGung, startIndex]);

  useEffect(() => {
    if (returnToTileId) {
      const targetIndex = tileData.findIndex(t => t.id === returnToTileId);
      if (targetIndex !== -1) setPosition(targetIndex);
      navigate('/', { replace: true });
    }
  }, [returnToTileId, tileData, navigate]);

  useEffect(() => {
    if (!prevEventMode && eventMode) {
      setPosition(startIndex);
    } else if (prevEventMode && !eventMode) {
      setPosition(startIndex);
    }
    setPrevEventMode(eventMode);
  }, [eventMode, prevEventMode, startIndex]);

  const openTile = (type, tile) => {
    if (type === 'quiz') {
      if (!isMember) {
        setPendingQuizTile(tile);
        setQuizPopupMode('login');
        setShowQuizPopup(true);
        return;
      }
      setQuizPopupMode('quiz');
      setShowQuizPopup(true);
    } else if (type === 'event') {
      const randomAmount = Math.floor(Math.random() * 3) + 1;
      setNipCount(prev => prev + randomAmount);
      setGiveAmount(randomAmount);
      setGiveNipVisible(true);
    } else if (type === 'default' && tile.gungId) {
      // ✅ 딜레이 후 이동 (예: 500ms)
      setTimeout(() => {
        navigate(`/gung/${tile.gungId}`, {
          state: {
            fromTileId: tile.id,
            characterKey: characterKey,
          },
        });
      }, 800); // ← 원하는 만큼 밀리초 조정 가능
    }
  };


  useEffect(() => {
    if (isMember && pendingQuizTile) {
      const targetIndex = tileData.findIndex(t => t.id === pendingQuizTile.id);
      if (targetIndex !== -1) {
        moveToTile(targetIndex, 'quiz', pendingQuizTile);
      }
      setPendingQuizTile(null);
    }
  }, [isMember, pendingQuizTile, tileData]);

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

  const handleClick = (tile) => {
    if (tile.type === 'event' || tile.type === 'start') return;
    if (tile.type === 'quiz' && !isMember) {
      setPendingQuizTile(tile);
      setQuizPopupMode('login');
      setShowQuizPopup(true);
      return;
    }
    const targetIndex = tileData.findIndex(t => t.id === tile.id);
    if (targetIndex === position) {
      openTile(tile.type, tile);
    } else {
      moveToTile(targetIndex, tile.type, tile);
    }
  };

  const handleMove = (direction) => {
    if (eventMode || isMoving) return;
    const len = tileData.length;
    let newPos = position;
    do {
      newPos = direction === 'right'
        ? (newPos + 1) % len
        : (newPos - 1 + len) % len;
    } while (tileData[newPos].type === 'event');
    setIsMoving(true);
    setPosition(newPos);
    const targetTile = tileData[newPos];
    setTimeout(() => {
      openTile(targetTile.type, targetTile);
      setIsMoving(false);
    }, 800);
  };

  const moveByYutResult = (result) => {
    const steps = { doo: 1, gae: 2, gul: 3, yut: 4, mo: 5, backdo: -1 };
    const moveCount = steps[result];
    if (moveCount == null) return;
    const isForward = moveCount > 0;
    const absMove = Math.abs(moveCount);
    let current = position;
    let moved = 0;
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
          setTimeout(() => {
            openTile(tileData[current].type, tileData[current]);
          }, 300);
        }
      };
      step();
    }, 1000);
  };

  useEffect(() => {
    if (shouldStartQuiz) {
      const randomQuiz = getRandomQuiz();
      if (randomQuiz) {
        setCurrentQuiz(randomQuiz);
        setShowQuiz(true);
      }
      setShouldStartQuiz(false);
    }
  }, [shouldStartQuiz]);

  const getRandomQuiz = () => {
    const quizList = quizData['gyeongbokgung'];
    // 일단 다 경복궁퀴즈로 넣어놓음
    if (!quizList || quizList.length === 0) return null;
    return quizList[Math.floor(Math.random() * quizList.length)];
  };

  return (
    <div className='Board'>
      <div className={`mapArea gung_${currentGung}`}>
        <CenterWrap eventMode={eventMode} triggerYut={triggerYut} onYutResult={moveByYutResult} currentGung={currentGung} />
        <div className="tile_wrap">
          {tileData.map(tile => (
            <Tile key={tile.id} tile={tile} eventMode={eventMode} isMember={isMember} onClick={() => handleClick(tile)} />
          ))}
          <Character tile={tileData[position]} characterKey={characterKey} eventMode={eventMode} />
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
            setNipCount(prev => prev + 1);
            setGiveAmount(1);
            setJustEarned(true);
          }}
        />
      )}

      {giveNipVisible && (
        <GiveNip
          amount={giveAmount}
          total={nipCount}
          onClose={() => {
            setIsReenterFromGiveNip(true);
            setEventMode(false);
            onResetYut();
            setGiveNipVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default Board;
