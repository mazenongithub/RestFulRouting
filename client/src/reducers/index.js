import { combineReducers } from 'redux';
import userReducer from './loadReducer';

export default combineReducers({
    user: userReducer
});
