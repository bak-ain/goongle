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

  useEffect(() => {
    // 새로고침 감지 및 리디렉트
    if (performance.getEntriesByType('navigation')[0].type === 'reload') {
      window.location.replace('/');
    }

    const seen = localStorage.getItem('guideSeen');
    const path = window.location.pathname;

    const isPersistentPage = [
      '/nip-guide',
      '/nip-change',
      '/nip-partner',
      '/mypage',
    ].includes(path);

    if (seen && isPersistentPage) {
      setShowGuide(false);
    } else if (isPersistentPage) {
      localStorage.setItem('guideSeen', 'true');
    }
  }, []);


  useEffect(() => {
    const seen = localStorage.getItem('guideSeen');
    const path = window.location.pathname;

    const isPersistentPage = [
      '/nip-guide',
      '/nip-change',
      '/nip-partner',
      '/mypage',
    ].includes(path);

    if (seen && isPersistentPage) {
      // ⛔️ 이미 본 사용자, 그리고 닢/마이페이지일 경우
      setShowGuide(false);
    } else if (isPersistentPage) {
      // ✅ 닢/마이페이지지만 처음 접속한 경우
      localStorage.setItem('guideSeen', 'true');
    }
  }, []);

  const handleGuideClose = () => {
    const path = window.location.pathname;
    const isPersistentPage = [
      '/nip-guide',
      '/nip-change',
      '/nip-partner',
      '/mypage',
    ].includes(path);

    if (isPersistentPage) {
      localStorage.setItem('guideSeen', 'true');
    }
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
