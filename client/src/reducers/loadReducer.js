import { LOAD_USER } from '../actions/loaduser';
import { CREATE_POST } from '../actions/createpost'
export default function(state = {}, action) {

    switch (action.type) {
        case LOAD_USER:
            console.log(action);
            return action.payload || false;
        case CREATE_POST:
            console.log(action);
            return action.payload || false;
        default:
            return state;
    }
}
