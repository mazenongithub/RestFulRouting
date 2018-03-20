import axios from 'axios';
import { LOAD_USER } from './loaduser';
import { CREATE_POST } from './createpost';
import { FIND_USER } from './finduser';

axios.defaults.withCredentials = true;
//https://webdevbootcamp-mazenoncloud9.c9users.io:8080
export const loadUser = () => async dispatch => {

    const res = await axios.get("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export const createPost = (values, callback) => async dispatch => {

    const res = await axios.post("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting", values);
    callback();
    dispatch(

        { type: CREATE_POST, payload: res.data });
};

export const findUser = (user_id) => async dispatch => {

    const res = await axios.get("/RestFulRouting/" + user_id + "/show");
    dispatch({ type: FIND_USER, payload: res.data });
};
