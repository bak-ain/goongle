import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Map from './map/Map';
import GungInfo from './pages/GungInfo';
import Member from './pages/Member';
import Nonmember from './pages/Nonmember';
import './App.css';

function App() {
  const [isMember, setIsMember] = useState(!!localStorage.getItem('userToken'));
  return (
    <div className="App">
      <Header isMember={isMember} setIsMember={setIsMember} />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/gung/:gungId" element={<GungInfo />} />
        <Route path="/member" element={<Member />} />
        <Route path="/nonmember" element={<Nonmember />} />
      </Routes>
    </div>
  );
}

export default App;
