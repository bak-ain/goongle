import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Character from './Character';
import MovingBtn from './MovingBtn';
import Tile from './Tile';
import Quiz from './Quiz';
import { TileImg, TileEventImg } from '../img/img';
import './Board.css';

const tileData = [
  // ✅ 기본 타일 8개
  { id: 1, title: '경복궁', type: 'default', width: 350, height: 170, gungId: 'gyeongbokgung', image: TileImg.gung, gridArea: 't2' },
  { id: 2, title: '근정전', type: 'default', width: 350, height: 170, gungId: 'geunjeongjeon', image: TileImg.gung, gridArea: 't4' },
  { id: 3, title: '수정전', type: 'default', width: 150, height: 150, gungId: 'sujeongjeon', image: TileImg.gung, gridArea: 't6' },
  { id: 4, title: '경회루', type: 'default', width: 150, height: 150, gungId: 'gyeonghoeru', image: TileImg.gung, gridArea: 't8' },
  { id: 5, title: '강녕전', type: 'default', width: 350, height: 150, gungId: 'gangnyeongjeon', image: TileImg.gung, gridArea: 't10' },
  { id: 6, title: '향원정', type: 'default', width: 150, height: 170, gungId: 'hyangwonjeong', image: TileImg.gung, gridArea: 't11' },
  { id: 7, title: '건청궁', type: 'default', width: 350, height: 150, gungId: 'geoncheonggung', image: TileImg.gung, gridArea: 't12' },
  { id: 8, title: '고궁박물관', type: 'default', width: 150, height: 150, gungId: 'gogungmuseum', image: TileImg.gung, gridArea: 't14' },

  // ✅ 퀴즈 타일
  { id: 9, title: '궁 퀴즈', type: 'quiz', width: 170, height: 148, image: TileImg.quiz, gridArea: 't15' },

  // ✅ 이벤트 타일 6개 (앞면/뒷면 구분)
  {
    id: 10, title: '이벤트1', type: 'event', width: 150, height: 150, gridArea: 't3',
    front: { image: TileEventImg.event1, text: '이벤트1' },
    back: { image: TileEventImg.event1, text: '랜덤선물!' }
  },
  {
    id: 11, title: '이벤트2', type: 'event', width: 150, height: 150, gridArea: 't5',
    front: { image: TileEventImg.event2, text: '이벤트2' },
    back: { image: TileEventImg.event2, text: '게임기회!' }
  },
  {
    id: 12, title: '이벤트3', type: 'event', width: 170, height: 148, gridArea: 't7',
    front: { image: TileEventImg.event3, text: '이벤트3' },
    back: { image: TileEventImg.event3, text: '추첨참여!' }
  },
  {
    id: 13, title: '이벤트4', type: 'event', width: 150, height: 150, gridArea: 't9',
    front: { image: TileEventImg.event4, text: '이벤트4' },
    back: { image: TileEventImg.event4, text: '왕의선물!' }
  },
  {
    id: 14, title: '이벤트5', type: 'event', width: 150, height: 150, gridArea: 't13',
    front: { image: TileEventImg.event5, text: '이벤트5' },
    back: { image: TileEventImg.event5, text: '명소사진!' }
  },
  {
    id: 15, title: '이벤트6', type: 'event', width: 150, height: 150, gridArea: 't16',
    front: { image: TileEventImg.event6, text: '이벤트6' },
    back: { image: TileEventImg.event6, text: '기념뱃지!' }
  },

  // ✅ 시작 타일
  { id: 16, title: 'START', type: 'start', width: 150, height: 150, image: null, gridArea: 't1' }
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
