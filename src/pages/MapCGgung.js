import React, { useState } from 'react';
import Map from '../map/Map';
import Header from '../components/Header';
import './Home.css';

const MapCGgung = () => {
    const [eventMode, setEventMode] = useState(false);

    return (
        <div className="MapCGgung Home">
            <Header currentGung="changgyeonggung"
                setCurrentGung={() => { }} />
            <Map
                currentGung="changgyeonggung"
                setCurrentGung={() => { }}
                eventMode={eventMode}
                setEventMode={setEventMode}
            />
        </div>
    );
};

export default MapCGgung;
