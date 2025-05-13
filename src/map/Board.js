import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Character from './Character';
import MovingBtn from './MovingBtn';
import CenterWrap from './CenterWrap';
import Tile from './Tile';
import Quiz from './Quiz';
import { startTile, map1Tiles, quizTile, eventTiles } from '../utils';
import './Board.css';

export const tileData = [
  startTile,
  ...map1Tiles,
  quizTile,
  ...eventTiles
];

const Board = ({ eventMode, triggerYut }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const startIndex = tileData.findIndex(tile => tile.type === 'start');
  const [position, setPosition] = useState(startIndex);
  const [prevEventMode, setPrevEventMode] = useState(false); // 이전값 추적용
  const [resetYutItem, setResetYutItem] = useState(false);
  const navigate = useNavigate();


  // ✅ eventMode가 false → true로 바뀌는 순간 캐릭터 위치 초기화
  useEffect(() => {
    if (!prevEventMode && eventMode) {
      setPosition(startIndex); // 캐릭터를 시작 위치로 이동
    }
    setPrevEventMode(eventMode); // 다음 비교를 위해 상태 저장
  }, [eventMode]);


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
      setShowQuiz(true);
    } else if (type === 'default' && tile.gungId) {
      navigate(`/gung/${tile.gungId}`);
    }
  };

  const handleClick = (tile) => {
    if (tile.type === 'event' || tile.type === 'start') return;

    const targetIndex = tileData.findIndex(t => t.id === tile.id);
    moveToTile(targetIndex, tile.type, tile);
  };

  const handleMove = (direction) => {
    const len = tileData.length;
    let newPos = position;

    do {
      newPos = direction === 'right'
        ? (newPos + 1) % len
        : (newPos - 1 + len) % len;
    } while (tileData[newPos].type === 'event');

    setPosition(newPos);
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
          // ✅ 2. 이동이 끝난 후 1.5초 후에 다시 원래 자리로 복귀
          setTimeout(() => {
            setPosition(startIndex);      // 캐릭터 복귀
            setResetYutItem(true);        // YutItem을 'yutStart'로 되돌림

            // ✅ 딜레이 후 false로 다시 초기화
            setTimeout(() => {
              setResetYutItem(false);     // 다음 윷 던지기 위해 초기화
            }, 100); // 100~200ms 정도면 충분해
          }, 1500);


          setTimeout(() => {
            openTile(tileData[current].type, tileData[current]);
          }, 300); // 도착한 타일 열기
        }
      };

      step();
    }, 1000); // ✅ 이동 딜레이 1초
  };



  return (
    <div className='Board'>
      <CenterWrap eventMode={eventMode} triggerYut={triggerYut} onYutResult={moveByYutResult} resetYutItem={resetYutItem} />
      <div className='mapArea'>
        <div className="tile_wrap">
          {tileData.map(tile => (
            <Tile
              key={tile.id}
              tile={tile}
              eventMode={eventMode}
              onClick={() => handleClick(tile)}
            />
          ))}
          <Character tile={tileData[position]} />
        </div>
      </div>

      <MovingBtn onMove={handleMove} />
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>
  );
};

export default Board;
