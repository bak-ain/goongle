import React, { useState } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import YutnoriBtn from './YutnoriBtn';
import Header from '../components/Header';
import './Map.css';

const Map = () => {
  const [eventMode, setEventMode] = useState(false);
  const [triggerYut, setTriggerYut] = useState(0);

  const handleYutnoriClick = () => {
    if (!eventMode) {
      setEventMode(true);       // ✅ 첫 클릭은 모드 진입만
    } else {
      setTriggerYut(prev => prev + 1); // ✅ 두 번째부터는 실행 트리거
    }
  };


  return (
    <div className="Map">
      <Header/>
      <Board eventMode={eventMode} triggerYut={triggerYut} />
      <div className='Map_left'>
        <InfoCard eventMode={eventMode} gungId="gyeongbokgung" />
        <YutnoriBtn onClick={handleYutnoriClick} />
      </div>
    </div>
  );
};

export default Map;
