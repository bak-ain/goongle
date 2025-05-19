import './GungInfo.css';
import { InfoImgs, InfoTexts } from './InfoUtils';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Characters } from "../img/img";

gsap.registerPlugin(ScrollTrigger);


export const PLACE_TO_GUNG = {
    // Gyeongbokgung
    gwanghwamun: 'gyeongbokgung',
    geunjeongjeon: 'gyeongbokgung',
    sujeongjeon: 'gyeongbokgung',
    gyeonghoeru: 'gyeongbokgung',
    gangnyeongjeon: 'gyeongbokgung',
    hyangwonjeong: 'gyeongbokgung',
    geoncheonggung: 'gyeongbokgung',
    gogungmuseum: 'gyeongbokgung',

    // Changdeokgung
    donhwamun: 'changdeokgung',
    injeongjeon: 'changdeokgung',
    huijeongdang: 'changdeokgung',
    nakseonjae: 'changdeokgung',
    buyongji: 'changdeokgung',
    aeryeonji: 'changdeokgung',
    yeongyeongdang: 'changdeokgung',
    ongnyucheon: 'changdeokgung',

    // Changgyeonggung
    honghwamun: 'changgyeonggung',
    okcheongyo: 'changgyeonggung',
    myeongjeongjeon: 'changgyeonggung',
    munjeongjeon: 'changgyeonggung',
    gyeongchunjeon: 'changgyeonggung',
    yeongchunheon: 'changgyeonggung',
    daeonshil: 'changgyeonggung',
    chundangji: 'changgyeonggung',

    // Deoksugung
    daehanmun: 'deoksugung',
    hamnyeongjeon: 'deoksugung',
    jeonggwanheon: 'deoksugung',
    seogeodang: 'deoksugung',
    junghwajeon: 'deoksugung',
    nationalmuseum: 'deoksugung',
    seokjojeon: 'deoksugung',
    dondeokjeon: 'deoksugung',

    // Gyeonghuigung
    heunghwamun: 'gyeonghuigung',
    sungjeongjeon: 'gyeonghuigung',
    jajeongjeon: 'gyeonghuigung',
    chungwandang: 'gyeonghuigung',
    yanghwadang: 'gyeonghuigung',
    yeonmotjeongwon: 'gyeonghuigung',
    taeryeongjeon: 'gyeonghuigung',
    seoulmuseum: 'gyeonghuigung'
};
const GUNG_NAMES = {
    gyeongbokgung: { kr: '경복궁', hanja: '景福宮' },
    changdeokgung: { kr: '창덕궁', hanja: '昌德宮' },
    changgyeonggung: { kr: '창경궁', hanja: '昌慶宮' },
    deoksugung: { kr: '덕수궁', hanja: '德壽宮' },
    gyeonghuigung: { kr: '경희궁', hanja: '慶熙宮' },
};


const GungHeader = ({ placeId, fromTileId, characterKey }) => {
    const navigate = useNavigate();

    const gungId = PLACE_TO_GUNG[placeId];
    const name = GUNG_NAMES[gungId] || { kr: '', hanja: '' };

    const handleExit = () => {
        navigate('/', {
            state: {
                returnToTileId: fromTileId,
                returnToGungId: gungId, // ✅ 현재 궁 ID도 함께 넘김!
                returnToCharacterKey: characterKey,
            },
        });
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
    return <div className="scroll-hint n2">scroll →</div>;
};

const TextBox = ({ gungId, placeId, section }) => {
    const sectionData = InfoTexts[gungId]?.[placeId]?.[section];

    if (!sectionData) return null;

    return (
        <div className="TextBox">
            <h2 className='h2'>{sectionData.title}</h2>
            <p className='p'>
                {sectionData.paragraphs.map((line, index) => (
                    <React.Fragment key={index}>
                        {parseBold(line)}
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
                <img src={InfoImgs[gungId][placeId].first[0]} alt={placeId} />
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
            <div className='guidetext'>
            <img src={Characters.goong4} alt="가이드캐릭터터" className="guide" />
            <div className="text">
                {paragraphs.map((line, index) => (
                    <p key={index}>
                        {parseBold(line)}
                    </p>
                ))}
            </div>
            </div>
            <div className="second_img">
                <img src={InfoImgs[gungId][placeId].second[0]} alt={placeId} className='first' />
            </div>
        </div>
    );
};

const ThirdSec = ({ gungId, placeId }) => {
    return (
        <div className='ThirdSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />

            <img src={InfoImgs[gungId][placeId].third[1]} className='sec' alt={placeId} />
            <img src={InfoImgs[gungId][placeId].third[2]} className='third' alt={placeId} />

            <div className='position'>
                <img src={InfoImgs[gungId][placeId].third[0]} className='first' alt={placeId} />
                <TextBox gungId={gungId} placeId={placeId} section="third" />
            </div>
        </div>
    )
}

const FourthSec = ({ gungId, placeId }) => {
    return (
        <div className='FourthSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />

            <div className='position'>
                <div className='left_img imgBox'>
                    <img src={InfoImgs[gungId][placeId].fourth[0]} className='first' alt={placeId} />
                    <img src={InfoImgs[gungId][placeId].fourth[1]} className='sec' alt={placeId} />
                </div>
                <TextBox gungId={gungId} placeId={placeId} section="fourth" />
                <div className='right_img imgBox'>
                    <img src={InfoImgs[gungId][placeId].fourth[2]} className='third' alt={placeId} />
                    <img src={InfoImgs[gungId][placeId].fourth[3]} className='fourth' alt={placeId} />
                </div>
            </div>
        </div>
    )
}

const FifthSec = ({ gungId, placeId }) => {
    return (
        <div className='FifthSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />

            <div className='position'>
                <div className='left_img imgBox'>
                    <img src={InfoImgs[gungId][placeId].fifth[0]} className='first' alt={placeId} />
                    <img src={InfoImgs[gungId][placeId].fifth[1]} className='sec' alt={placeId} />
                </div>
                <TextBox gungId={gungId} placeId={placeId} section="fifth" />
                <div className='right_img imgBox'>
                    <img src={InfoImgs[gungId][placeId].fifth[2]} className='third' alt={placeId} />
                    <img src={InfoImgs[gungId][placeId].fifth[3]} className='fourth' alt={placeId} />
                </div>
            </div>
        </div>
    )
}

const SixSec = ({ gungId, placeId }) => {
    return (
        <div className='SixSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />

            <img src={InfoImgs[gungId][placeId].sixth[1]} className='sec' alt={placeId} />
            <img src={InfoImgs[gungId][placeId].sixth[2]} className='third' alt={placeId} />
            <div className='position'>
                <img src={InfoImgs[gungId][placeId].sixth[0]} className='first' alt={placeId} />
                <TextBox gungId={gungId} placeId={placeId} section="sixth" />
            </div>
        </div>
    )
}

const SevenSec = ({ gungId, placeId }) => {
    return (
        <div className='SevenSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />

            <img src={InfoImgs[gungId][placeId].seventh[0]} alt={placeId} className='first'/>
            <TextBox gungId={gungId} placeId={placeId} section="seventh" />
        </div>
    )
}
const LastSec = ({ gungId, placeId }) => {
    return (
        <div className='LastSec'>
            <img src={Characters.goong4} alt="가이드캐릭터" className="guide" />
            <TextBox gungId={gungId} placeId={placeId} section="last" />
        </div>
    )
}
const GungInfo = () => {
    const { state } = useLocation();
    const fromTileId = state?.fromTileId;
    const characterKey = state?.characterKey;
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
            <GungHeader placeId={placeId} fromTileId={fromTileId} characterKey={characterKey} />  {/* 한자 + 국문 + 나가기 버튼 */}

            <div className="GungInfo" ref={containerRef}>
                <section className="first"><FirstSec gungId={gungId} placeId={placeId} /></section>
                <section className="second"><SecondSec gungId={gungId} placeId={placeId} /></section>
                <section className='third'><ThirdSec gungId={gungId} placeId={placeId} /></section>
                <section className='fourth'><FourthSec gungId={gungId} placeId={placeId} /></section>
                <section className='fifth'><FifthSec gungId={gungId} placeId={placeId} /></section>
                <section className='six'><SixSec gungId={gungId} placeId={placeId} /></section>
                <section className='seven'><SevenSec gungId={gungId} placeId={placeId} /></section>
                <section className='last'><LastSec gungId={gungId} placeId={placeId} /></section>
            </div>

            <ScrollHint isLast={sectionIndex === totalSections - 1} />
        </div>
    );
};

export default GungInfo;