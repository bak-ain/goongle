import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Icon1 from '../img/icon1.png';
import Icon2 from '../img/icon2.png';
import Icon3 from '../img/icon3.png';
import Icon4 from '../img/icon4.png';
import './NipPartner.css';

const partnerList = [
  {
    icon: Icon1,
    alt: "한복",
    title: "[ 경복궁고운솔 한복 ]",
    prices: [
      { text: "전통 한복 1시간 30분 대여", amount: "80닢" },
      { text: "전통 한복 3시간 30분 대여", amount: "120닢" },
      { text: "고급 한복 1시간 30분 대여", amount: "280닢" },
      { text: "고급 한복 3시간 30분 대여", amount: "320닢" },
    ]
  },
  {
    icon: Icon2,
    alt: "입장권",
    title: "[ 입장권 경복궁 입장권 ]",
    prices: [
      { text: "개인 내국인/외국인 1인", amount: "24닢" },
      { text: "단체 내국인/외국인 1인", amount: "19닢" },
      { text: "※ 단체는 10인부터 적용", note: true },
    ]
  },
  {
    icon: Icon3,
    alt: "밥",
    title: "[ 삼청동 수라간 ]",
    prices: [
      { text: "찰 보리비빔밥", amount: "150닢" },
      { text: "왕갈비탕 1인", amount: "200닢" },
      { text: "수라상 정식", amount: "400닢" },
    ]
  },
  {
    icon: Icon4,
    alt: "자개",
    title: "[ 경복궁 전통체험 클래스 ]",
    prices: [
      { text: "매듭 장신구 만들기", amount: "206닢" },
      { text: "자개 클래스 1인", amount: "304닢" },
    ]
  },
];

const NipPartner = () => {
  return (
    <div className="NipPartner">
      <Header />
      <section className="nip_box">
        <div className="Partner">
          <h2 className="h2">닢의 제휴처</h2>
          <Swiper
            className="Partner_box"
            spaceBetween={50}
            grabCursor={true}
            slidesOffsetBefore={80}
            slidesOffsetAfter={80}
            // centeredSlides={false}
            breakpoints={{
              1920: { slidesPerView: 4.5 },
              1700: { slidesPerView: 3.5 },
              1400: { slidesPerView: 2.5 },
              1100: { slidesPerView: 2.4 },
              1024: { slidesPerView: 2.3 },
              800: { slidesPerView: 2.3 },
              700: { slidesPerView: 2.2 },
              628: { slidesPerView: 2 },
              0: { slidesPerView: 1.2 },
            }}
          >
            {partnerList.concat(partnerList).map((partner, index) => (
              <SwiperSlide className="txt_box" key={`${partner.title}-${index}`}>
                <h3 className="h3">
                  <img src={partner.icon} alt={partner.alt} /> {partner.title}
                </h3>
                <ul className="price_list">
                  {partner.prices.map((item, idx) =>
                    item.note ? (
                      <li key={`note-${partner.title}-${idx}`}><small>{item.text}</small></li>
                    ) : (
                      <li key={`item-${partner.title}-${idx}`}>
                        <span className="p">{item.text}</span>
                        <strong className="p">{item.amount}</strong>
                      </li>
                    )
                  )}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default NipPartner;