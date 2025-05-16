import React from 'react';
import './QuizEntryPopup.css';

const QuizEntryPopup = ({ mode = 'quiz', onConfirm, onCancel }) => {
  return (
    <div className="quiz-entry-popup">
      <div className="popup-box">
        {mode === 'quiz' ? (
          <>
            <h2>궁:글<br /><strong>랜덤 퀴즈!</strong></h2>
            <p>해당맵 관련 퀴즈를 맞추시면<br />윷놀이 1회권을 증정합니다.
             <br/><span>(퀴즈는 하루 1회만 가능합니다.)</span>
            </p>
            <div className="btns">
              <button onClick={onConfirm}>퀴즈 풀기</button>
              <button onClick={onCancel}>돌아가기</button>
            </div>
          </>
        ) : (
          <>
            <h2>궁:글<br /><strong>로그인 안내</strong></h2>
            <p>
              해당 서비스는 <strong>회원 전용 서비스</strong>입니다.<br />
              가입 후 다양한 기능을 체험해보세요!<br />
              회원은 <strong>윷놀이를 통해 닢</strong>을 얻고,<br />
              <strong>제휴 쿠폰</strong>을 구매할 수 있어요.
            </p>
            <div className="btns">
              <button onClick={onConfirm}>로그인</button>
              <button onClick={onCancel}>돌아가기</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export default QuizEntryPopup;
