import React from 'react';
import Header from '../components/Header';
import Map from '../map/Map';
import { useState } from 'react';
import { useLogin } from '../LoginContext';
import './Home.css'

const Home = () => {
  const [currentGung, setCurrentGung] = useState('gyeongbokgung');


  return (
    <div className="Home">
      <Header  currentGung={currentGung} setCurrentGung={setCurrentGung} />
      <Map currentGung={currentGung} setCurrentGung={setCurrentGung} />
    </div>
  );
};

export default Home;
