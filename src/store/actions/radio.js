import { SELECT_STATION, UNSELECT_STATION } from './actionTypes';

export const selectStation = (station) => {
    return {
        type: SELECT_STATION,
        station,
    };
};

export const unselectStation = () => {
    return {
        type: UNSELECT_STATION,
    };
};