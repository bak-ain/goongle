import './GungInfo.css';
import { InfoImgs, InfoTexts } from '../img/InfoUtils';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';


const ScrollProgress = ({ currentIndex, total }) => {
    return (
        <div className="scroll-progress">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`progress-line ${i <= currentIndex ? 'filled' : ''}`}
                />
            ))}
        </div>
    );
};
const GUNG_NAMES = {
    gyeongbokgung: { kr: '경복궁', hanja: '景福宮' },
    changdeokgung: { kr: '창덕궁', hanja: '昌德宮' },
    changgyeonggung: { kr: '창경궁', hanja: '昌慶宮' },
    deoksugung: { kr: '덕수궁', hanja: '德壽宮' },
    gyeonghuigung: { kr: '경희궁', hanja: '慶熙宮' },
};


const GungHeader = ({ gungId }) => {
    const navigate = useNavigate();

    const name = GUNG_NAMES[gungId] || { kr: '', hanja: '' };

    // ✅ 회원 여부 판단 (예: localStorage에 token이 있으면 회원)
    const isMember = !!localStorage.getItem('userToken');

    const handleExit = () => {
        if (isMember) {
            navigate('/');
        } else {
            navigate('/');
        }
    };

    return (
        <header className="GungHeader">
            <div className="hanja">{name.hanja}</div>
            <div className="kr">{name.kr}</div>
            <button className="exit" onClick={handleExit}>나가기</button>
        </header>
    );
};

const ScrollHint = ({ isLast }) => {
    if (isLast) return null;
    return <div className="scroll-hint">scroll →</div>;
};


const FirstSec = () => {
    return (
        <div className="FirstSec">
            <div className="first_img">
                <img src={InfoImgs.gyeongbokgung.gwanghwamun.first[0]} alt="광화문 대표 이미지" />
            </div>
            <h2>{InfoTexts.gyeongbokgung.gwanghwamun.first.title}</h2>
        </div>
    );
};

const SecondSec = () => {
    const paragraphs = InfoTexts.gyeongbokgung.gwanghwamun.second.paragraphs;

    return (
        <div className="SecondSec">
            <div className="text">
                <p>
                    {paragraphs.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className='second_img'>
                <img src={InfoImgs.gyeongbokgung.gwanghwamun.second[0]} alt='광화문 이미지'></img>
            </div>
        </div>
    );
};

const ThirdSec = () => {
    return(
        <div className='ThirdSec'>

        </div>
    )
}

const GungInfo = () => {
    const { gungId } = useParams(); // ex: gyeongbokgung
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSections = 6;

    useEffect(() => {
        const handleScroll = () => {
            const scrollX = window.scrollX;
            const sectionWidth = window.innerWidth;
            const index = Math.round(scrollX / sectionWidth);
            setCurrentIndex(index);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="GungInfoWrapper"> {/* 공통 배경 처리 */}
            <ScrollProgress currentIndex={currentIndex} total={totalSections} />
            <GungHeader gungId={gungId} />  {/* 한자 + 국문 + 나가기 버튼 */}

            <div className="GungInfo">
                <section className="First"><FirstSec /></section>
                <section className="Second"><SecondSec /></section>
            </div>

            <ScrollHint isLast={currentIndex === totalSections - 1} />
        </div>
    );
};

export default GungInfo;