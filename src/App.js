import { Routes, Route } from 'react-router-dom'; // ❗ Router 제거
import Header from './components/Header';
import Map from './map/Map';
import GungInfo from './pages/GungInfo';
import Member from './pages/Member';
import Nonmember from './pages/Nonmember';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
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
