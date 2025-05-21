import React from "react";
import Header from "../components/Header";
import { useEffect, useRef } from 'react';
import Swiper from "swiper";
import Icon1 from '../img/icon1.png'
import Icon2 from '../img/icon2.png'
import Icon3 from '../img/icon3.png'
import Icon4 from '../img/icon4.png'
import 'swiper/css';
import './NipPartner.css'

const NipPartner = () => {
    const swiperRef = useRef(null);

    const getSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1920) return 3.5;
        if (width >= 1700) return 2.5;
        if (width >= 1400) return 2.5;
        if (width >= 1100) return 2.4;
        if (width >= 1024) return 2.3;
        if (width >= 800) return 2.3;
        if (width >= 700) return 2.2;
        if (width >= 628) return 2;
        return 1.2;
    };

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiperInstance = new Swiper(swiperRef.current, {
            slidesPerView: getSlidesPerView(),
            spaceBetween: 30,
            grabCursor: true,
        });

        const handleResize = () => {
            swiperInstance.params.slidesPerView = getSlidesPerView();
            swiperInstance.update();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            swiperInstance.destroy();
        };
    }, []);

    return (

        <div className="NipPartner">
            <Header />
            <section className="nip_box">
                <div className="Partner">
                    <h2 className="h2">닢의 제휴처</h2>
                    <div className="swiper Partner_box">
                        <div className="swiper-wrapper">
                            {/* 제휴처 1 - 한복 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon1} alt="한복" /> [ 경복궁고운솔 한복 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">전통 한복<b> 1시간 30분 대여</b></span><strong className="p">80닢</strong></li>
                                    <li><span className="p">전통 한복<b> 3시간 30분 대여</b></span><strong className="p">120닢</strong></li>
                                    <li><span className="p">고급 한복<b> 1시간 30분 대여</b></span><strong className="p">280닢</strong></li>
                                    <li><span className="p">고급 한복<b> 3시간 30분 대여</b></span><strong className="p">320닢</strong></li>
                                </ul>
                            </div>

                            {/* 제휴처 2 - 입장권 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon2} alt="입장권" /> [ 입장권 <em>경복궁 입장권</em> ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p"><b>개인</b> 내국인/외국인 1인</span><strong className="p">24닢</strong></li>
                                    <li><span className="p"><b>단체 </b>내국인/외국인 1인</span><strong className="p">19닢</strong></li>
                                    <li><small>※ 단체는 10인부터 적용</small></li>
                                </ul>
                            </div>

                            {/* 제휴처 3 - 삼청동 수라간 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon3} alt="밥" /> [ 삼청동 수라간 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">찰 보리비빔밥</span><strong className="p">150닢</strong></li>
                                    <li><span className="p">왕갈비탕 1인</span><strong className="p">200닢</strong></li>
                                    <li><span className="p">수라상 정식</span><strong className="p">400닢</strong></li>
                                </ul>
                            </div>

                            {/* 제휴처 4 - 전통체험 클래스 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon4} alt="자개" /> [ 경복궁 전통체험 클래스 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">매듭 장신구 만들기</span><strong className="p">206닢</strong></li>
                                    <li><span className="p">자개 클래스 1인</span><strong className="p">304닢</strong></li>
                                </ul>
                            </div>
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon1} alt="한복" /> [ 경복궁고운솔 한복 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">전통 한복<b> 1시간 30분 대여</b></span><strong className="p">80닢</strong></li>
                                    <li><span className="p">전통 한복<b> 3시간 30분 대여</b></span><strong className="p">120닢</strong></li>
                                    <li><span className="p">고급 한복<b> 1시간 30분 대여</b></span><strong className="p">280닢</strong></li>
                                    <li><span className="p">고급 한복<b> 3시간 30분 대여</b></span><strong className="p">320닢</strong></li>
                                </ul>
                            </div>

                            {/* 제휴처 2 - 입장권 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon2} alt="입장권" /> [ 입장권 <em>경복궁 입장권</em> ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p"><b>개인</b> 내국인/외국인 1인</span><strong className="p">24닢</strong></li>
                                    <li><span className="p"><b>단체 </b>내국인/외국인 1인</span><strong className="p">19닢</strong></li>
                                    <li><small>※ 단체는 10인부터 적용</small></li>
                                </ul>
                            </div>

                            {/* 제휴처 3 - 삼청동 수라간 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon3} alt="밥" /> [ 삼청동 수라간 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">찰 보리비빔밥</span><strong className="p">150닢</strong></li>
                                    <li><span className="p">왕갈비탕 1인</span><strong className="p">200닢</strong></li>
                                    <li><span className="p">수라상 정식</span><strong className="p">400닢</strong></li>
                                </ul>
                            </div>

                            {/* 제휴처 4 - 전통체험 클래스 */}
                            <div className="swiper-slide txt_box">
                                <h3 className="h3">
                                    <img src={Icon4} alt="자개" /> [ 경복궁 전통체험 클래스 ]
                                </h3>
                                <ul className="price_list">
                                    <li><span className="p">매듭 장신구 만들기</span><strong className="p">206닢</strong></li>
                                    <li><span className="p">자개 클래스 1인</span><strong className="p">304닢</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default NipPartner;