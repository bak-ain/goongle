// Guide.jsx
import React from 'react';
import guideImg from '../img/guide.png'; // 경로는 실제 위치에 맞게 조정
import './Guide.css';

const Guide = ({ onClose }) => {
    return (
        <div className="FullScreenGuide" onClick={onClose}>
            <img src={guideImg} alt="가이드" />
        </div>
    );
};
export default Guide;
