import React, { useState, useRef } from "react";
import NameImg from '../img/name_img.png'
import Header from "../components/Header";
import "./MyPage.css";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("used");
  const [phone, setPhone] = useState("010-****-6482");
  const [email, setEmail] = useState("gunggle123@google.com");

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFocus = (ref) => {
    if (ref.current && ref.current.readOnly) {
      ref.current.readOnly = false;
      ref.current.focus();
      const val = ref.current.value;
      ref.current.setSelectionRange(val.length, val.length);
    }
  };

  const handlePhoneChange = (e) => {
    const clean = e.target.value.replace(/[^0-9\-]/g, "");
    setPhone(clean);
  };

  return (
    <div className="MyPage">
      <Header />
      <section className="nip_box">
        <h2 className="h2">마이페이지</h2>

        <div className="name">
          <div className="img_box">
            <img src={NameImg} alt="궁글이 캐릭터" />
          </div>
          <p>궁글이</p>
          <div className="btn">
            <button className="n2">닉네임 변경</button>
            <button className="n2">캐릭터 변경</button>
          </div>
        </div>

        <div className="my_nip">
          <div className="nip_title">
            <h3 className="h3">나의 닢</h3>
          </div>
          <div className="nip_balance_buttons">
            <div className="nip_balance">
              <h4>
                내가 보유한 닢: <span>152</span> <b>닢</b>
              </h4>
            </div>
          </div>
          <div className="nip_buttons">
            <button className="n2">닢 충전하러 가기</button>
            <button className="n2">닢 교환가기</button>
          </div>
        </div>

        <div className="yutnori">
          <div className="info_box">
            <div className="title n2">
              이번 달 윷놀이 <b>(31일 소멸예정)</b>
            </div>
            <div className="count n2">2회 남음</div>
          </div>
          <div className="info_box">
            <div className="title n2">총 남은 윷놀이</div>
            <div className="count n2">5회</div>
          </div>
        </div>

        <div className="ticket">
          <h3 className="h3">보유 중인 교환권</h3>
          <div className="tabs">
            <button
              className={`tab ${activeTab === "used" ? "active" : ""}`}
              onClick={() => setActiveTab("used")}
            >
              사용
            </button>
            <button
              className={`tab ${activeTab === "unused" ? "active" : ""}`}
              onClick={() => setActiveTab("unused")}
            >
              미사용
            </button>
          </div>

          <div className="tab-content">
            <div id="used" className={`content ${activeTab === "used" ? "active" : ""}`}>
              <p>사용한 교환권이 없습니다.</p>
            </div>
            <div id="unused" className={`content ${activeTab === "unused" ? "active" : ""}`}>
              <div className="coupon_box">
                <div className="coupon_info">
                  <div className="coupon_left">
                    <div className="text">
                      <div className="title h3">경복궁고운솔 한복</div>
                      <div className="desc p2">
                        <strong>고급 한복</strong> 3시간 30분 대여
                      </div>
                    </div>
                  </div>
                  <div className="coupon_right">
                    <div className="date n2">2025.06.12까지</div>
                    <button className="btn n2">교환권 보기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="code">
          <h3 className="h3">내 정보</h3>
          <form>
            <label>성명</label>
            <input
              type="text"
              id="nameInput"
              defaultValue="김아람"
              readOnly
              ref={nameRef}
              onClick={() => handleFocus(nameRef)}
            />

            <label>연락처</label>
            <input
              type="text"
              id="phone"
              value={phone}
              readOnly
              ref={phoneRef}
              onClick={() => handleFocus(phoneRef)}
              onChange={handlePhoneChange}
            />

            <label>이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
              ref={emailRef}
              onClick={() => handleFocus(emailRef)}
            />

            <label>아이디</label>
            <input type="text" value="gunggle123" readOnly />

            <label>비밀번호</label>
            <input
              type="password"
              id="password"
              value="********"
              readOnly
              ref={passwordRef}
              onClick={() => handleFocus(passwordRef)}
            />

            <button className="edit-btn n2" type="button">수정하기</button>
          </form>

          <div className="account-box">
            <div className="account-header">
              <h3 className="h3">계정 연동</h3>
            </div>
            <div className="account-body">
              <div className="account-left">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                />
                <p className="n2">Google</p>
                <div className="account_text">
                  <p className="n2">ID : hong123</p>
                  <p className="n2">Date Connected : 2025-05-01</p>
                </div>
              </div>
              <button className="disconnect_btn n2">연결 끊기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
