import React from 'react';

const InfoCard = ({ eventMode }) => {
  return (
    <div className="InfoCard">
      {eventMode ? '이벤트 카드 정보' : '기본 궁 정보'}
    </div>
  );
};

export default InfoCard;
