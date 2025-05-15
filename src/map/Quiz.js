import React, { useState, useEffect } from 'react';
import './Quiz.css';
import correctIcon from '../img/answer.png';
import wrongIcon from '../img/wrong.png';
import { Characters } from "../img/img";

const Quiz = ({ questionData, onClose, onCorrect }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = (index) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === questionData.answerIndex;
    setIsCorrect(correct);

    if (correct) {
      onCorrect(); // 닢 카운트 증가
    }
  };

  useEffect(() => {
    if (isCorrect === true) {
      const timeout = setTimeout(() => {
        onClose(); // 퀴즈 팝업 닫기 → Board.js에서 GiveNip 자동으로 뜸
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [isCorrect, onClose]);

  const handleExit = () => {
    setSelected(null);
    setIsCorrect(null);
    onClose();
  };

  return (
    <div className="quiz-wrap">
      <div className="quiz-box">
        <h2 className="question">
          <span className="q-mark">Q</span> {questionData.question}
        </h2>
        <p className="desc">*답은 하나만 선택해 주세요.<br />난이도 ⭐⭐⭐</p>
        <div className="options">
          {questionData.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selected === index ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
              disabled={selected !== null}
            >
              <span>{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          ))}
        </div>

        {!selected && (
          <div className="hint-box">
            <div className="hint">힌트: {questionData.hint}</div>
            <img src={Characters.goong1} alt="캐릭터" className="character" />
          </div>
        )}
      </div>

      {selected !== null && isCorrect && (
        <div className="popup correct">
          <img src={correctIcon} alt="정답" />
        </div>
      )}
      {selected !== null && isCorrect === false && (
        <div className="popup wrong">
          <img src={wrongIcon} alt="오답" />
          <div className="explanation">
            <p>{questionData.explanation}</p>

            <button className="exit" onClick={handleExit}>나가기</button>
            {/* <div className="btns">
              <button onClick={handleExit}>윷던지기</button>
              <button onClick={handleExit}>다른 정보탐험</button>
            </div> */}
          </div>
        </div>
      )}

      <button className="exit" onClick={handleExit}>나가기</button>
    </div>
  );
};

export default Quiz;
