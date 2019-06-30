import { createStore, combineReducers } from 'redux';

import radioReducer from './reducers/radio';

const rootReducer = combineReducers({
    radio: radioReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;