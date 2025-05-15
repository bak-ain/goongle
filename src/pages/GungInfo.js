import './GungInfo.css';
import { InfoImgs, InfoTexts } from './InfoUtils';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




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

const PLACE_TO_GUNG = {
    gwanghwamun: 'gyeongbokgung',
    geunjeongjeon: 'gyeongbokgung',
    hyangwonjeong: 'gyeongbokgung',
    donhwamun: 'changdeokgung',
    // ... 필요한 만큼 추가
};
const GUNG_NAMES = {
    gyeongbokgung: { kr: '경복궁', hanja: '景福宮' },
    changdeokgung: { kr: '창덕궁', hanja: '昌德宮' },
    changgyeonggung: { kr: '창경궁', hanja: '昌慶宮' },
    deoksugung: { kr: '덕수궁', hanja: '德壽宮' },
    gyeonghuigung: { kr: '경희궁', hanja: '慶熙宮' },
};


const GungHeader = ({ placeId, fromTileId }) => {
  const navigate = useNavigate();

  const gungId = PLACE_TO_GUNG[placeId];
  const name = GUNG_NAMES[gungId] || { kr: '', hanja: '' };

  const handleExit = () => {
    navigate('/', { state: { returnToTileId: fromTileId } });
  };

  return (
    <header className="GungHeader">
      <div className='gung_name'>
        <div className="hanja">{name.hanja}</div>
        <div className="kr">{name.kr}</div>
      </div>
      <button className="exit" onClick={handleExit}>나가기</button>
    </header>
  );
};


const ScrollHint = ({ isLast }) => {
    if (isLast) return null;
    return <div className="scroll-hint">scroll →</div>;
};

const TextBox = ({ gungId, placeId, section }) => {
    const sectionData = InfoTexts[gungId]?.[placeId]?.[section];

    if (!sectionData) return null; // 혹시 없는 경우 안전하게

    return (
        <div className="TextBox">
            <h2 className='h2'>{sectionData.title}</h2>
            <p className='p'>
                {sectionData.paragraphs.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

const FirstSec = ({ gungId, placeId }) => {
    return (
        <div className="FirstSec">
            <div className="first_img">
                <img src={InfoImgs[gungId][placeId].first[0]} alt="광화문 대표 이미지" />
            </div>
            <h2 className='h2'>{InfoTexts[gungId][placeId].first.title}</h2>
        </div>
    );
};
const parseBold = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);// '**텍스트**'를 기준으로 분리

    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>; // **강조** → <strong>강조</strong>
        }
        return <span key={i}>{part}</span>;
    });
};

const SecondSec = ({ gungId, placeId }) => {
    const paragraphs = InfoTexts[gungId][placeId].second.paragraphs;

    return (
        <div className="SecondSec">
            <div className="text">
                {paragraphs.map((line, index) => (
                    <p key={index}>
                        {parseBold(line)}
                    </p>
                ))}
            </div>
            <div className="second_img">
                <img src={InfoImgs[gungId][placeId].second[0]} alt='광화문 이미지' />
            </div>
        </div>
    );
};

const ThirdSec = ({ gungId, placeId }) => {
    return (
        <div className='ThirdSec'>
            <img src={InfoImgs[gungId][placeId].third[0]} alt='광화문 이미지' />
            <img src={InfoImgs[gungId][placeId].third[1]} alt='광화문 이미지' />
            <img src={InfoImgs[gungId][placeId].third[2]} alt='광화문 이미지' />
            <TextBox
                gungId="gyeongbokgung"
                placeId="gwanghwamun"
                section="third"
            />
        </div>
    )
}

const FourthSec = ({ gungId, placeId }) => {
    return (
        <div className='FourthSec'>
            <div className='left_img imgBox'>
                <img src={InfoImgs[gungId][placeId].fourth[0]} alt='광화문 이미지' />
                <img src={InfoImgs[gungId][placeId].fourth[1]} alt='광화문 이미지' />
            </div>
            <div className='right_img imgBox'>
                <img src={InfoImgs[gungId][placeId].fourth[2]} alt='광화문 이미지' />
                <img src={InfoImgs[gungId][placeId].fourth[3]} alt='광화문 이미지' />
            </div>
            <TextBox
                gungId="gyeongbokgung"
                placeId="gwanghwamun"
                section="fourth"
            />
        </div>
    )
}

const FifthSec = ({ gungId, placeId }) => {
    return (
        <div className='FifthSec'>
            <div className='left_img imgBox'>
                <img src={InfoImgs[gungId][placeId].fifth[0]} alt='광화문 이미지' />
                <img src={InfoImgs[gungId][placeId].fifth[1]} alt='광화문 이미지' />
            </div>
            <div className='right_img imgBox'>
                <img src={InfoImgs[gungId][placeId].fifth[2]} alt='광화문 이미지' />
                <img src={InfoImgs[gungId][placeId].fifth[3]} alt='광화문 이미지' />
            </div>
            <TextBox
                gungId="gyeongbokgung"
                placeId="gwanghwamun"
                section="fifth"
            />
        </div>
    )
}

const SixSec = ({ gungId, placeId }) => {
    return (
        <div className='SixSec'>
            <img src={InfoImgs[gungId][placeId].sixth[0]} alt='광화문 이미지' />
            <img src={InfoImgs[gungId][placeId].sixth[1]} alt='광화문 이미지' />
            <img src={InfoImgs[gungId][placeId].sixth[2]} alt='광화문 이미지' />
            <TextBox
                gungId="gyeongbokgung"
                placeId="gwanghwamun"
                section="sixth"
            />
        </div>
    )
}

const SevenSec = ({ gungId, placeId }) => {
    return (
        <div className='SevenSec'>
            <img src={InfoImgs[gungId][placeId].seventh[0]} alt='광화문 이미지' />
            <TextBox
                gungId="gyeongbokgung"
                placeId="gwanghwamun"
                section="seventh"
            />
        </div>
    )
}
const LastSec = ({ gungId, placeId }) => {
    return (
        <div className='LastSec'>
            <h2 className='h2'>마지막 페이지</h2>
        </div>
    )
}
const GungInfo = () => {
    const { state } = useLocation();
    const fromTileId = state?.fromTileId;
    const { gungId: placeId } = useParams();
    const gungId = PLACE_TO_GUNG[placeId];   
    const containerRef = useRef(null);
    const [sectionIndex, setSectionIndex] = useState(0);
    const totalSections = 8;

    useEffect(() => {
        const container = containerRef.current;
        let isScrolling = false;

        const handleWheel = (e) => {
            if (isScrolling) return;

            e.preventDefault();
            isScrolling = true;

            const direction = e.deltaY > 0 ? 1 : -1;
            const nextIndex = Math.min(Math.max(sectionIndex + direction, 0), totalSections - 1);
            setSectionIndex(nextIndex);

            container.scrollTo({
                left: nextIndex * window.innerWidth,
                behavior: 'smooth',
            });

            setTimeout(() => {
                isScrolling = false;
            }, 700); // debounce duration
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => window.removeEventListener('wheel', handleWheel);
    }, [sectionIndex]);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollX = window.scrollX;
    //         const sectionWidth = window.innerWidth;
    //         const index = Math.round(scrollX / sectionWidth);
    //         setCurrentIndex(index);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);



    return (
        <div className="GungInfoWrapper" > {/* 공통 배경 처리 */}
            {/* <ScrollProgress sectionIndex={sectionIndex} total={totalSections} /> */}
            <GungHeader placeId={placeId} fromTileId={fromTileId} />  {/* 한자 + 국문 + 나가기 버튼 */}

            <div className="GungInfo" ref={containerRef}>
                <section className="first"><FirstSec gungId={gungId} placeId={placeId}/></section>
                <section className="second"><SecondSec gungId={gungId} placeId={placeId} /></section>
                <section className='third'><ThirdSec gungId={gungId} placeId={placeId}/></section>
                <section className='fourth'><FourthSec gungId={gungId} placeId={placeId}/></section>
                <section className='fifth'><FifthSec gungId={gungId} placeId={placeId}/></section>
                <section className='six'><SixSec gungId={gungId} placeId={placeId}/></section>
                <section className='seven'><SevenSec gungId={gungId} placeId={placeId}/></section>
                <section className='last'><LastSec gungId={gungId} placeId={placeId}/></section>
            </div>

            <ScrollHint isLast={sectionIndex === totalSections - 1} />
        </div>
    );
};

export default GungInfo;