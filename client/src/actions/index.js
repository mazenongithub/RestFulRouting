import axios from 'axios';
import { LOAD_USER } from './loaduser';
import { CREATE_POST } from './createpost';

axios.defaults.withCredentials = true;

export const loadUser = () => async dispatch => {
    //loadallusers
    const res = await axios.get("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export const createPost = (values, callback) => async dispatch => {
    //loadallusers
    const res = await axios.post("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting", values);
    callback();
    dispatch(

        { type: CREATE_POST, payload: res.data });
};
