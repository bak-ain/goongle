import React from 'react';

const YutnoriBtn = ({ setEventMode }) => {
  const handleClick = () => {
    setEventMode(true);
  };

  return (
    <button className="YutnoriBtn" onClick={handleClick}>
      윷놀이 시작!
    </button>
  );
};

export default YutnoriBtn;
