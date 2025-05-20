import React, { useState } from 'react';
import Map from '../map/Map';
import Header from '../components/Header';
import './Home.css';

const MapGHgung = () => {
    const [eventMode, setEventMode] = useState(false);

    return (
        <div className="MapGHgung Home">
            <Header currentGung="gyeonghuigung"
                setCurrentGung={() => { }} />
            <Map
                currentGung="gyeonghuigung"
                setCurrentGung={() => { }}
                eventMode={eventMode}
                setEventMode={setEventMode}
            />
        </div>
    );
};

export default MapGHgung;
