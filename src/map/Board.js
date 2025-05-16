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
  setEventMode,
  triggerYut,
  currentGung,
  setShowQuizPopup,
  setQuizPopupMode,
  shouldStartQuiz,
  setShouldStartQuiz,
  setResetYutnoriBtn,
  setYutChances,
  setClicked,
  setYutReady
}) => {
  const { isMember } = useLogin();
  const { state } = useLocation();
  const navigate = useNavigate();
  const returnToTileId = state?.returnToTileId;

  const mapTiles = mapTilesByGung[currentGung] || [];
  const tileData = [startTile, ...mapTiles, { ...quizTile, gungId: currentGung }, ...eventTiles];
  const startIndex = tileData.findIndex(tile => tile.type === 'start');

  const [position, setPosition] = useState(startIndex);
  const [prevEventMode, setPrevEventMode] = useState(false);
  const [resetYutItem, setResetYutItem] = useState(false);
  const [nipCount, setNipCount] = useState(0);
  const [giveAmount, setGiveAmount] = useState(1);
  const [giveNipVisible, setGiveNipVisible] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [justEarned, setJustEarned] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (returnToTileId) {
      const targetIndex = tileData.findIndex(t => t.id === returnToTileId);
      if (targetIndex !== -1) setPosition(targetIndex);
      navigate('/', { replace: true });
    }
  }, [returnToTileId, navigate]);

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
      navigate(`/gung/${tile.gungId}`, { state: { fromTileId: tile.id } });
    }
  };

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
    const quizList = quizData[currentGung];
    if (!quizList || quizList.length === 0) return null;
    return quizList[Math.floor(Math.random() * quizList.length)];
  };

  return (
    <div className='Board'>
      <div className={`mapArea gung_${currentGung}`}>
        <CenterWrap eventMode={eventMode} triggerYut={triggerYut} onYutResult={moveByYutResult} resetYutItem={resetYutItem} />
        <div className="tile_wrap">
          {tileData.map(tile => (
            <Tile key={tile.id} tile={tile} eventMode={eventMode} isMember={isMember} onClick={() => handleClick(tile)} />
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
            setGiveNipVisible(false);
            setEventMode(false);
            setResetYutnoriBtn(prev => !prev);
            setClicked(false);
            setYutReady(false); // 준비 상태 해제
          }}
        />
      )}
    </div>
  );
};

export default Board;
