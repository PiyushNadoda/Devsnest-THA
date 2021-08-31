import inputPlaceReducer from './inputReducer';
import { combineReducers } from 'redux';
import placeDataReducer from './getPlaceDataReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    place : inputPlaceReducer,
    data: placeDataReducer,
    theme: themeReducer
})

export default rootReducer;