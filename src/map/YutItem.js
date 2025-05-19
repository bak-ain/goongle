import React, { useEffect, useState } from 'react';
import { YutItems, YutText } from '../img/img';
import './YutItem.css';

const YUT_RESULTS = ['doo', 'gae', 'gul', 'yut', 'mo', 'backdo'];
const YUT_STATES = {
  doo: ['front', 'front', 'front', 'back'],
  gae: ['front', 'front', 'back', 'back'],
  gul: ['front', 'back', 'back', 'back'],
  mo: ['front', 'front', 'front', 'front'],
  yut: ['back', 'back', 'back', 'back'],
  backdo: ['back', 'front', 'front', 'front'],
};

const YutItem = ({ trigger, onResult, reset }) => {
  const [result, setResult] = useState('yut');
  const [sides, setSides] = useState(['front', 'front', 'front', 'front']);
  const [flipped, setFlipped] = useState([false, false, false, false]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (reset) {
      setResult('yut');
      setSides(['front', 'front', 'front', 'front']);
      setFlipped([false, false, false, false]);
      setShowText(false);
    }
  }, [reset]);

  useEffect(() => {
    if (!trigger) return;

    const rand = YUT_RESULTS[Math.floor(Math.random() * YUT_RESULTS.length)];
    const finalSides = YUT_STATES[rand];

    setResult(rand);
    setShowText(false);
    setSides(['front', 'front', 'front', 'front']); // 초기화
    setFlipped([false, false, false, false]);

    const intervals = [];

    for (let i = 0; i < 4; i++) {
      // 빠르게 반복 회전
      intervals[i] = setInterval(() => {
        setFlipped(prev => {
          const updated = [...prev];
          updated[i] = !updated[i];
          return updated;
        });
      }, 150);

      // 개별 윷 멈추기
      setTimeout(() => {
        clearInterval(intervals[i]);

        // 결과 면 설정
        setSides(prev => {
          const updated = [...prev];
          updated[i] = finalSides[i];
          return updated;
        });

        // 회전 멈추고 최종 flip 적용
        setFlipped(prev => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 1000 + i * 200); // 순차 멈춤
    }

    // 결과 텍스트는 마지막 멈춘 후
    setTimeout(() => {
      onResult?.(rand);
      setShowText(true);
    }, 2000);
  }, [trigger]);

  return (
    <div className="YutItemWrapper">
      <div className="yutSet">
        {sides.map((side, i) => (
          <div key={i} className="yut">
            <div className={`yut-inner ${flipped[i] ? 'flip' : ''}`}>
              <img src={YutItems.yutFront} className="front" alt="front" />
              <img
                src={
                  side === 'back'
                    ? result === 'backdo'
                      ? YutItems.yutBdo
                      : YutItems.yutBack
                    : YutItems.yutFront // ✅ front일 땐 그냥 앞면 이미지도 넣어도 됨, 하지만 실제로는 안 보임
                }
                className="back"
                alt={side}
              />
            </div>
          </div>
        ))}
      </div>

      {showText && (
        <div className={`yutResultText ${result === 'backdo' ? 'backdo-text' : ''}`}>
          <img src={YutText[result]} alt={result} />
        </div>
      )}
    </div>
  );
};

export default YutItem;
