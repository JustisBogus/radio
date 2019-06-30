import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStation, unselectStation } from '../store/actions/radio';
import Station from '../Components/Station/Station';
import RadioTop from './RadioTop/RadioTop';
import RadioBottom from './RadioBottom/RadioBottom';
import './Main.css';

class Main extends Component {

    handleSelectStation = (id, name) => {
        const station = {
            id,
            name,
        }
        this.props.onSelectStation(station);
    }

    handleUnselectStation = () => {
        this.props.onUnselectStation();
    }

    triggerNoAction = (symbol) => {
        console.log('pressed ' + symbol);
    }

    render() {
        return (
            <div className="main-component">
                <div className="main-radioContainer">
                    <RadioTop 
                        doNothing={this.triggerNoAction}
                    />
                    <div className="main-stationContainer">
                        {this.props.stations.map((station, index) => {
                            return <Station 
                                key={station.id}
                                station={station}
                                selectedStation={this.props.selectedStation}
                                numberOfStations={this.props.stations.length}
                                index={index}
                                selectStation={this.handleSelectStation}
                                unselectStation={this.handleUnselectStation}
                                doNothing={this.triggerNoAction} 
                            />
                        })}
                    </div>
                    <RadioBottom
                        selectedStation={this.props.selectedStation}
                    />
                </div>
            </div>
        );
    }
}
// Zinau, Redux cia overkill, bet norejau parodyt, kad moku :)
const mapStateToProps = state => {
    return {
        stations: state.radio.stations,
        selectedStation: state.radio.selectedStation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectStation: (station) => dispatch(selectStation(station)),
        onUnselectStation: () => dispatch(unselectStation()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
