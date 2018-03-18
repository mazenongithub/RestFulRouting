import { LOAD_USER } from '../actions/loaduser';
export default function(state = {}, action) {

    switch (action.type) {
        case LOAD_USER:
            console.log(action);
            return action.payload || false;
        default:
            return state;
    }
}
