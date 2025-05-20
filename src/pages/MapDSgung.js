import React, { useState } from 'react';
import Map from '../map/Map';
import Header from '../components/Header';
import './Home.css';

const MapDSgung = () => {
    const [eventMode, setEventMode] = useState(false);

    return (
        <div className="MapDSgung Home">
            <Header currentGung="deoksugung"
                setCurrentGung={() => { }} />
            <Map
                currentGung="deoksugung"
                setCurrentGung={() => { }}
                eventMode={eventMode}
                setEventMode={setEventMode}
            />
        </div>
    );
};

export default MapDSgung;
