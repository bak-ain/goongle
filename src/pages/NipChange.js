import React from 'react';
import { useState } from 'react';
import Header from "../components/Header";
import './NipChange.css'; // 스타일 import
import img1 from '../img/ticimg.png';
import img2 from '../img/ticimg2.png';
import img3 from '../img/ticimg3.png';
import img4 from '../img/ticimg4.png';
import img5 from '../img/ticimg4_2.png';
import img6 from '../img/ticimg1_3.png';
import img7 from '../img/ticimg1_1.png';
import img8 from '../img/ticimg1_2.png';
import img9 from '../img/ticimg2_2.png';
import img10 from '../img/ticimg2_1.png';
import img11 from '../img/ticimg3_1.png';

const MENU_CATEGORIES = ['한복대여', '입장권', '음식점', '전통체험 클래스', '윷놀이'];

const NipPartner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='NipChange'>
            <Header/>
        <section className="nip_box">
            <div className="ticket">
                <h2 className="h2">닢 교환권 페이지</h2>

                {/* 메뉴 */}
                <nav className="menu">
                    <ul className="h4">
                        {MENU_CATEGORIES.map((label, i) => (
                            <li
                                key={i}
                                className={i === activeIndex ? 'active' : ''}
                                onClick={() => setActiveIndex(i)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 콘텐츠 리스트 */}
                <div className="list">
                    <ul>
                        {[0, 1, 2, 3, 4].map((_, i) => (
                            <li key={i} className={i === activeIndex ? 'active' : ''}>
                                {renderTicketsByIndex(i)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        </div>
    );
};

const renderTicketsByIndex = (index) => {
    const ticketData = [
        // 한복대여
        [
            { img: img1, title: '경복궁고운솔 한복', desc: '전통 한복 1시간 30분 대여', price: '80닢' },
            { img: img2, title: '경복궁고운솔 한복', desc: '고급 한복 1시간 30분 대여', price: '280닢' },
            { img: img3, title: '경복궁고운솔 한복', desc: '전통 한복 3시간 30분 대여', price: '120닢' },
            { img: img4, title: '경복궁고운솔 한복', desc: '고급 한복 3시간 30분 대여', price: '320닢' },
        ],
        // 입장권
        [
            { img: img5, title: '경복궁 입장권 (개인)', desc: '내국인/외국인 1인', price: '24닢' },
            { img: img5, title: '경복궁 입장권 (단체)', desc: '[단체 10인부터] 내국인/외국인 1인', price: '280닢' },
        ],
        // 음식점
        [
            { img: img6, title: '삼청동 수라간', desc: '찰보리비빔밥 1인분', price: '150닢' },
            { img: img7, title: '삼청동 수라간', desc: '왕 갈비탕 1인분', price: '200닢' },
            { img: img8, title: '삼청동 수라간', desc: '수라상 정식 1인분', price: '400닢' },
        ],
        // 전통체험 클래스
        [
            { img: img9, title: '경복궁 전통체험 클래스', desc: '매듭 장신구 만들기', price: '260닢' },
            { img: img10, title: '경복궁 전통체험 클래스', desc: '자개 클래스 1인', price: '304닢' },
        ],
        // 윷놀이
        [
            { img: img11, title: '궁글의 이용권', desc: '윷놀이 3회 이용권', price: '5닢' },
            { img: img11, title: '궁글의 이용권', desc: '윷놀이 6회 이용권', price: '10닢' },
            { img: img11, title: '궁글의 이용권', desc: '윷놀이 9회 이용권', price: '15닢' },
        ],
    ];

    return ticketData[index].map((item, i) => <TicketItem key={i} {...item} />);
};

const TicketItem = ({ img, title, desc, price }) => (
    <div className="ticket_box">
        <div className="img_box">
            <img src={img} alt={title} />
        </div>
        <div className="center">
            <div className="center_txt">
                <h3 className="h3">{title}</h3>
                <p className="p">{desc}</p>
                <strong className="s">{price}</strong>
            </div>
            <div className="right">
                <button className="n2">교환</button>
            </div>
        </div>
    </div>
);

export default NipPartner;
