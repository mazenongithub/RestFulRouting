import { LOAD_USER } from '../actions';
import { CREATE_POST } from '../actions';
import { FETCH_USER } from '../actions';
import _ from 'lodash'
export default function(state = {}, action) {

    switch (action.type) {
        case LOAD_USER:
            return _.mapKeys(action.payload, '_id');
        case FETCH_USER:
            console.log(action);
            return action.payload || false;
        case CREATE_POST:
            console.log(action);
            return action.payload || false;
        default:
            return state;
    }
}
