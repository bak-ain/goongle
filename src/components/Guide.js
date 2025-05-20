// Guide.jsx
import React from 'react';
import './Guide.css';

const Guide = ({ onClose }) => {
    return (
        <div className="FullScreenGuide" onClick={onClose}>
            {/* <img src={guideImg} alt="가이드" /> */}
            <div className='guideImg'></div>
        </div>
    );
};
export default Guide;
