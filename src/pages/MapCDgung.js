import React, { useState } from 'react';
import Map from '../map/Map';
import Header from '../components/Header';
import './Home.css';

const MapCDgung = () => {
    const [eventMode, setEventMode] = useState(false);

    return (
        <div className="MapCDgung Home">
            <Header currentGung="changdeokgung"
                setCurrentGung={() => { }} />
            <Map
                currentGung="changdeokgung"
                setCurrentGung={() => { }}
                eventMode={eventMode}
                setEventMode={setEventMode}
            />
        </div>
    );
};

export default MapCDgung;
