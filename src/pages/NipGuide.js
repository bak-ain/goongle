import React from "react";
import Header from "../components/Header";
import './NipGuide.css'; // 필요한 스타일 import

const NipGuide = () => {
  return (
    <div className="NipGuide">
      <Header />
      <section className="nip_box">
        <i className="fa-solid fa-bars menu-icon"></i>
        <div className="b_txt_box">
          <div className="txt_box">
            <h2 className="h2">닢 제도 가이드 설명</h2>
            <div className="p_box">
              <p>
                1닢 = 100원 가치로, 제휴처에서 현금가보다 20% 할인된<br />
                가격으로 사용할 수 있습니다
              </p>
            </div>
            <h3 className="h3">
              닢<b>이란</b>무엇<b>인가요?</b>
            </h3>
            <p>
              닢은 전통문화 경험을 더욱 즐겁고<br />
              실속 있게 즐길 수 있도록 만든 회원전용 보상 포인트입니다.
            </p>
          </div>

          <div className="nip_box">
            <div className="container">
              <article className="section1">
                <h3 className="h3">
                  닢<b>은 어떻게 얻나요?</b>
                </h3>
                <div className="das"></div>
                <ul>
                  <li>퀴즈 맞추면 <strong>1닢</strong> (하루에 1번만 가능)</li>
                  <li>윷놀이를 굴려 이벤트 칸에 도착하면 <strong>1~3닢 랜덤</strong> 지급</li>
                </ul>
              </article>

              <article className="section2">
                <h3 className="h3">
                  윷놀이<b>는 어떻게 얻나요?</b>
                </h3>
                <div className="das"></div>
                <ul>
                  <li>회원가입 시 윷놀이 던질 수 있는 기회 <strong>3번</strong></li>
                  <li>윷놀이 이용권 구매</li>
                  <li>
                    <strong>매월</strong> 윷놀이 <strong>3회</strong> 던질 기회가 <strong>자동으로 지급</strong>
                  </li>
                </ul>
              </article>

              <article className="section3">
                <h3 className="h3">
                  닢 <b>활용 안내서</b>
                </h3>
                <div className="das"></div>
                <ul>
                  <li>닢은 <strong>제휴처에서만</strong> 사용 가능 (현금으로 교환 불가)</li>
                  <li>잔여 닢 확인은 마이페이지에서 확인 가능합니다.</li>
                </ul>
              </article>

              <article className="section4">
                <h3 className="h3">* 유의 사항 *</h3>
                <ul>
                  <li className="set">
                    매월 3회 받은 윷놀이는 <strong>매월 초기화</strong>됩니다.
                  </li>
                  <li>
                    <strong>교환권</strong>으로 받은 윷놀이는 따로 <strong>기한 없이</strong><br />
                    자유롭게 사용할 수 있습니다.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NipGuide;
