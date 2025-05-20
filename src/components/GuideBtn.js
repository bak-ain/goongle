import React, { useState } from 'react';
import Guide from './Guide'; // 모달에 띄울 컴포넌트
import './Guide.css';

const GuideBtn = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick(); // ✅ 외부에서 온 메뉴 닫기 함수 호출
    setOpen(true);
  };

  return (
    <>
      <button className="GuideBtn" onClick={handleClick}>
        가이드
      </button>
      {open && <Guide onClose={() => setOpen(false)} />}
    </>
  );
};


export default GuideBtn;
