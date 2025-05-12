import React from 'react';
import GungItem from './GungItem';
import YutItem from './YutItem';

const CenterWrap = ({ eventMode }) => {
    return (
        <div className="CenterWrap">
            {eventMode ? <YutItem /> : <GungItem />}
        </div>
    );
};

export default CenterWrap;
