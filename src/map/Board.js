import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Character from './Character';
import MovingBtn from './MovingBtn';
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

const Board = () => {
  const [eventMode, setEventMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const startIndex = tileData.findIndex(tile => tile.type === 'start');
  const [position, setPosition] = useState(startIndex);
  const navigate = useNavigate();

  // 👇 이동 → 도착 후 GungInfo or Quiz 실행
  const moveToTile = (targetIndex, tileType, tileDataObj) => {
    if (targetIndex === position) {
      openTile(tileType, tileDataObj);
      return;
    }

    let current = position;

    const step = () => {
      current = (current + 1) % tileData.length;

      // 이벤트 타일이면 스킵
      while (tileData[current].type === 'event') {
        current = (current + 1) % tileData.length;
      }

      setPosition(current);

      if (current !== targetIndex) {
        setTimeout(step, 300); // 애니메이션 타이밍
      } else {
        setTimeout(() => openTile(tileType, tileDataObj), 300);
      }
    };

    step();
  };

  // 👇 목적지 도착 후 실행 함수
  const openTile = (type, tile) => {
    if (type === 'quiz') {
      setShowQuiz(true);
    } else if (type === 'default' && tile.gungId) {
      navigate(`/gung/${tile.gungId}`);
    }
  };

  // 👇 이거 하나만 남기면 됨!
  const handleClick = (tile) => {
    if (tile.type === 'event' || tile.type === 'start') return;

    const targetIndex = tileData.findIndex(t => t.id === tile.id);
    moveToTile(targetIndex, tile.type, tile);
  };


  // 이동 로직
  const handleMove = (direction) => {
    const len = tileData.length;
    let newPos = position;

    do {
      newPos = direction === 'right'
        ? (newPos + 1) % len
        : (newPos - 1 + len) % len;
    } while (tileData[newPos].type === 'event'); // event는 건너뜀

    setPosition(newPos);
  };


  return (
    <><div className='Board'>
      <div className="tile-wrap">
        {tileData.map(tile => (
          <Tile
            key={tile.id}
            tile={tile}
            eventMode={eventMode}
            onClick={() => handleClick(tile)}
          />
        ))}

        {/* ✅ 캐릭터 위치는 tileData[position]의 gridArea로 결정됨 */}
        <Character tile={tileData[position]} />
      </div>
      <MovingBtn onMove={handleMove} />

      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>
    </>
  );
};


export default Board;
