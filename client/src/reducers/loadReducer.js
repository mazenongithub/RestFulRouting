import { LOAD_USER } from '../actions/loaduser';
import { CREATE_POST } from '../actions/createpost'
import _ from 'lodash'
export default function(state = {}, action) {

    switch (action.type) {
        case LOAD_USER:
            return _.mapKeys(action.payload, '_id');
        case CREATE_POST:
            console.log(action);
            return action.payload || false;
        default:
            return state;
    }
}
