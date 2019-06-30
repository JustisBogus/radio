import React from 'react';
import Power from '../../assets/switch.png';
import BackArrow from '../../assets/back-arrow.png';
import './RadioTop.css';


const radioTop = (props) => (
    <div className="radioTop-component" >
        <div 
            className="radioTop-backButton" 
            onClick={() => props.doNothing('back')}>
            <img src={BackArrow} alt="Back" />
        </div>
        <div className="radioTop-title">STATIONS</div>
        <div 
            className="radioTop-powerButton"
            onClick={() => props.doNothing('power')}>
            <img src={Power} alt="Power" />
        </div>
    </div>
);

export default radioTop;