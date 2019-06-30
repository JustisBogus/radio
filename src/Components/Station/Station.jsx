import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import './Station.css';

class Stations extends Component {
    render () {

        const { index, numberOfStations, station, selectedStation } = this.props
        const classListName = ['station-name'];
        const classListFrequency = ['station-frequency'];

        if (index + 1 === numberOfStations) {
            classListName.push('removeBorder');
            classListFrequency.push('removeBorder');
        }

        let content;

        if (station.id === selectedStation.id) {
            content = ( <Spring
                from={{transform: 'scale(0.1)'}}
                to={{transform:'scale(1)'}}>
                { props => (
                    <div style={props}>
                        <div className="station-contentContainer">
                            <div 
                                className="station-circleButton"
                                onClick={() => this.props.doNothing('-')}> 
                                - 
                            </div>
                            <div className="station-image">
                                <img src={this.props.station.image} alt="Album Cover" />
                            </div>
                            <div 
                                className="station-circleButton"
                                onClick={() => this.props.doNothing('+')}> 
                                + 
                            </div>
                        </div>
                    </div>
                )} 
            </Spring>
            )
        }
        return (
            <div className="station-component">
                {content}
                <div 
                    className="station-container" 
                    onClick={station.id === selectedStation.id 
                    ? () => this.props.unselectStation()
                    : () => this.props.selectStation(station.id, station.name)}>
                    <div className={classListName.join(' ')}>
                        {station.name}
                    </div>
                    <div className={classListFrequency.join(' ')}>
                        {station.frequency}
                    </div>
                </div>
            </div>
         );
    }
}

export default Stations;