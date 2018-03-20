import { combineReducers } from 'redux';
import userReducer from './loadReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    user: userReducer

});
