import React, { useState } from 'react';
import Guide from './Guide'; // 모달에 띄울 컴포넌트
import './Guide.css';

const GuideBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="GuideBtn" onClick={() => setOpen(true)}>
        가이드
      </button>
      {open && <Guide onClose={() => setOpen(false)} />}
    </>
  );
};

export default GuideBtn;
