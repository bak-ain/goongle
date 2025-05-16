import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from './LoginContext';
import Home from './pages/Home'; // ← 통합된 홈
import GungInfo from './pages/GungInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Home />} />              {/* ✅ 통합 홈 */}
          <Route path="/gung/:gungId" element={<GungInfo />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
