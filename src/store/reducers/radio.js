import { SELECT_STATION, UNSELECT_STATION } from '../actions/actionTypes';
import stationData from './stationData';

const initialState = {
    stations: stationData,
    selectedStation: {
        id: '',
        name: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_STATION:
            return {
                ...state,
                selectedStation: action.station,
            };
        case UNSELECT_STATION:
            return {
                ...state,
                selectedStation: {
                    id: '',
                    name: '',
                },
            };
        default:
            return state;
    };
};

export default reducer;

