import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from './LoginContext';
import Home from './pages/Home';
import Guide from './components/Guide';
import GungInfo from './pages/GungInfo';
import MapCDgung from './pages/MapCDgung';
import MapCGgung from './pages/MapCGgung';
import MapDSgung from './pages/MapDSgung';
import MapGBgung from './pages/MapGBgung';
import MapGHgung from './pages/MapGHgung';
import NipGuide from './pages/NipGuide';
import NipChange from './pages/NipChange';
import NipPartner from './pages/NipPartner';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  const [showGuide, setShowGuide] = useState(true);
  const [logoutMessage, setLogoutMessage] = useState('');

  // 한 번 본 가이드는 다시 안 보이게 하고 싶다면 아래 코드 추가
  // useEffect(() => {
  //   const seen = localStorage.getItem('guideSeen');
  //   if (seen) setShowGuide(false);
  // }, []);

  // const handleGuideClose = () => {
  //   localStorage.setItem('guideSeen', 'true');
  //   setShowGuide(false);
  // };

  const handleGuideClose = () => {
    setShowGuide(false);
  };

  return (
    <div className="App">
      <LoginProvider>
        {showGuide ? (
          <Guide onClose={handleGuideClose} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gung/:placeId" element={<GungInfo />} />
            <Route path="/map/gyeongbokgung" element={<MapGBgung />} />
            <Route path="/map/changdeokgung" element={<MapCDgung />} />
            <Route path="/map/changgyeonggung" element={<MapCGgung />} />
            <Route path="/map/gyeonghuigung" element={<MapGHgung />} />
            <Route path="/map/deoksugung" element={<MapDSgung />} />
            <Route path="/nip-guide" element={<NipGuide />} />
            <Route path="/nip-change" element={<NipChange />} />
            <Route path="/nip-partner" element={<NipPartner />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        )}
      </LoginProvider>
    </div>
  );
}

export default App;
