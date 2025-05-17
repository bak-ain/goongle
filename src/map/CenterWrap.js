import React, { useEffect, useState } from 'react';
import GungItem from './GungItem';
import YutItem from './YutItem';
import './CenterWrap.css';

const CenterWrap = ({ eventMode, triggerYut, onYutResult, resetYutItem, currentGung   }) => {
    return (
        <div className="CenterWrap">
            {eventMode ? (
                <YutItem trigger={triggerYut}
                    reset={resetYutItem}
                    onResult={onYutResult} />
            ) : (
                <GungItem  currentGung={currentGung}/>
            )}
        </div>
    );
};


export default CenterWrap;
