import React from 'react';
import './RadioBottom.css';

const radioBottom = (props) => (
    <div className="radioBottom-component" >    
        <div className="radioBottom-currentlyPlaying">{props.selectedStation.name !== '' 
            ? 'CURRENTLY PLAYING' : null}
        </div>
        <div className="radioBottom-stationName">{props.selectedStation.name}</div>
    </div>
);

export default radioBottom;