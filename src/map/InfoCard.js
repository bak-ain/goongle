import React from 'react';
import { gungInfoData } from '../utils';
import { yutnoriRule } from '../utils';
import './InfoCard.css';

const InfoCard = ({ eventMode, gungId }) => {
  if (eventMode) {
    return (
      <div className="InfoCard eventMode">
        <div className="spring" />
        <div className="fins" />
        <div className="InfoCard_wrap">
          <div className="InfoCard_top">
            <h2>{yutnoriRule.title}</h2>
          </div>
          <ul className="InfoCard_contents">
            {/* 이동 규칙 */}
            <li className='move'>
              <h3 className="p">
                <i className={yutnoriRule.rules.moveRule.icon}></i>
                {yutnoriRule.rules.moveRule.heading}
              </h3>
              <div className="p2">
                {yutnoriRule.rules.moveRule.lines.map((pair, i) => (
                  <p key={i}>
                    <span className="unit">{pair[0]}</span>
                    <span className="unit">{pair[1]}</span>
                  </p>
                ))}
              </div>
            </li>
            {/* 플레이 방식 */}
            <li className='play'>
              <h3 className="p">
                <i className={yutnoriRule.rules.playRule.icon}></i>
                {yutnoriRule.rules.playRule.heading}
              </h3>
              <p className="p2">
                {yutnoriRule.rules.playRule.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </li>
            {/* 이용권 규칙 */}
            <li className="ticket">
              <h3 className="p">
                <i className={yutnoriRule.rules.ticketRule.icon}></i>
                {yutnoriRule.rules.ticketRule.heading}
              </h3>
              <p className="p2 l1">{yutnoriRule.rules.ticketRule.line1}</p>
              <p className="p2 l2">{yutnoriRule.rules.ticketRule.line2}</p>
                <small>{yutnoriRule.rules.ticketRule.line3.text}</small>
              <p className="p2 l3">{yutnoriRule.rules.ticketRule.line4}</p>
            </li>

          </ul>
        </div>
      </div>

    );
  }

  const info = gungInfoData[gungId];
  if (!info) return <div className="InfoCard">정보가 없습니다.</div>;

  const { name, address, tel, time, price, transport } = info;

  return (
    <div className="InfoCard">
      <div className='spring' />
      <div className='fins' />
      <div className='InfoCard_wrap'>
        <div className='InfoCard_top'>
          <h2>{name}</h2>
          <p className='p3'>위치 : {address}<br />tel : {tel}</p>
        </div>
        <ul className='InfoCard_contents'>
          <li className='time'>
            <h3 className='p'><i class="fa-regular fa-clock"></i>관람시간</h3>
            <p className='p2'>{time.hours}<br />{time.close}</p>
            <small>{time.note}</small>
          </li>
          <li className='price'>
            <h3 className='p'><i class="fa-solid fa-won-sign"></i>관람요금</h3>
            <p className='p2'>기본 : {price.base}<br />단체<small>(10인 이상)</small> : {price.group}</p>
          </li>
          <li className='transport'>
            <h3 className='p'><i class="fa-regular fa-map"></i>교통편</h3>
            {transport.subway.map((s, i) => (
              <p key={i} className='p2'> <em className={`line_bg line_${s.line} `} >{s.line}</em>호선 : {s.station}</p>
            ))}
            <p className='p2'>  간선 : {transport.bus.간선.join(', ')}</p>
            <p className='p2'> 지선 : {transport.bus.지선.join(', ')}</p>
            <p className='p2'>{transport.bus.기타}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
