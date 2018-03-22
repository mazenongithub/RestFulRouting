import { LOAD_USER, CREATE_POST, FETCH_USER } from '../actions/'
import _ from 'lodash'
export default function(state = {}, action) {
    console.log(action.payload)
    switch (action.type) {
        case LOAD_USER:
            return _.mapKeys(action.payload, '_id');
        case FETCH_USER:
            return action.payload || false;
        case CREATE_POST:
            console.log(action);
            return action.payload || false;
        default:
            return state;
    }
}
