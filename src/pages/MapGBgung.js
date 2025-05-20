import React, { useState } from 'react';
import Map from '../map/Map';
import Header from '../components/Header';
import './Home.css';

const MapGBgung = () => {
    const [eventMode, setEventMode] = useState(false);

    return (
        <div className="MapGbgung Home">
            <Header currentGung="gyeongbokgung"
                setCurrentGung={() => { }} />
            <Map
                currentGung="gyeongbokgung"
                setCurrentGung={() => { }}
                eventMode={eventMode}
                setEventMode={setEventMode}
            />
        </div>
    );
};

export default MapGBgung;
