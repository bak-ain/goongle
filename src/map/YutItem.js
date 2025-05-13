import React, { useEffect, useState } from 'react';
import { YutItems } from '../img/img';
import './YutItem.css';

const YUT_RESULTS = ['doo', 'gae', 'gul', 'yut', 'mo', 'backdo'];

const YutItem = ({ trigger, onResult, reset }) => {
  const [currentYut, setCurrentYut] = useState('yutDefault');

  // ✅ 윷 리셋 트리거 처리
  useEffect(() => {
    if (reset) {
      setCurrentYut('yutDefault');
    }
  }, [reset]);

  // ✅ 윷 결과 출력
  useEffect(() => {
    if (trigger === 0) return;

    const randomKey = YUT_RESULTS[Math.floor(Math.random() * YUT_RESULTS.length)];
    setCurrentYut(randomKey);
    onResult?.(randomKey);
  }, [trigger]);

  return (
    <div className="YutItem">
      <img src={YutItems[currentYut]} alt={currentYut} />
    </div>
  );
};

export default YutItem;
