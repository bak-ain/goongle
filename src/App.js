import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Map from './map/Map';
import GungInfo from './pages/GungInfo';
import Member from './pages/Member';
import Nonmember from './pages/Nonmember';
import './App.css';

function App() {
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('userToken');
      setIsMember(!!token);
    };

    handleStorageChange(); // 초기 실행

    // ✅ 로그인 상태 동기화 위해 storage 이벤트 등록
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="App">
      <Header isMember={isMember} setIsMember={setIsMember} />
      <Routes>
        <Route path="/" element={<Map isMember={isMember} setIsMember={setIsMember} />} />
        <Route path="/gung/:gungId" element={<GungInfo />} />
        <Route path="/member" element={<Member />} />
        <Route path="/nonmember" element={<Nonmember />} />
      </Routes>
    </div>
  );
}

export default App;
