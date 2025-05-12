import React, { useState } from 'react';
import Board from './Board';
import InfoCard from './InfoCard';
import MovingBtn from './MovingBtn';
import YutnoriBtn from './YutnoriBtn';

const Map = () => {
  const [eventMode, setEventMode] = useState(false); // ⭐ 이벤트 상태 (false: 기본, true: 윷놀이)

  return (
    <div className="Map">
      <Board eventMode={eventMode} />
      <InfoCard eventMode={eventMode} />
      <MovingBtn />
      <YutnoriBtn setEventMode={setEventMode} />
    </div>
  );
};

export default Map;
