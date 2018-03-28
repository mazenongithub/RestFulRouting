import { CREATE_POST, DELETE_USER } from '../actions/'
import _ from 'lodash'
export default function(state = {}, action) {
    console.log(action.payload);
    switch (action.type) {
        case CREATE_POST:
            console.log(action.payload)
            return (state, action.payload) || false;
        case DELETE_USER:
            console.log(action);
            return _.omit(state, action.payload) || false;
        default:
            return state;
    }
}
