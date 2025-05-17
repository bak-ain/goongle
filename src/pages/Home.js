import React from 'react';
import Header from '../components/Header';
import Map from '../map/Map';
import { useState } from 'react';
import { useLogin } from '../LoginContext';
import './Home.css'

const Home = () => {
  const [currentGung, setCurrentGung] = useState('gyeongbokgung');
  const [eventMode, setEventMode] = useState(false);
  const handleGungChange = (gungId) => {
    setCurrentGung(gungId);
    if (eventMode) {
      setEventMode(false); // 🔧 이벤트모드 끄기
    }
  };


  return (
    <div className="Home">
      <Header currentGung={currentGung} setCurrentGung={handleGungChange} />
      <Map currentGung={currentGung} setCurrentGung={setCurrentGung} eventMode={eventMode}
      setEventMode={setEventMode} />
    </div>
  );
};

export default Home;
