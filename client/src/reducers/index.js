import { combineReducers } from 'redux';
import userReducer from './loadReducer';
import { reducer as formReducer } from 'redux-form';
import showReducer from './loadReducer';

export default combineReducers({
    user: userReducer,
    form: formReducer,
    show: showReducer
});
