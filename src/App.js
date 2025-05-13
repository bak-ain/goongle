import './App.css';
import './font.css'; 
import Header from './components/Header';
import Map from './map/Map';
import CenterWrap from './map/CenterWrap';


function App() {
  return (
    <div className="App">
      <Header/>
      <Map/>
    </div>
  );
}

export default App;
