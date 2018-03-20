import axios from 'axios';
import { LOAD_USER } from './loaduser';
import { CREATE_POST } from './createpost';

axios.defaults.withCredentials = true;
//https://webdevbootcamp-mazenoncloud9.c9users.io:8080
export const loadUser = () => async dispatch => {

    const res = await axios.get("/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export const createPost = (values, callback) => async dispatch => {

    const res = await axios.post("/RestFulRouting", values);
    callback();
    dispatch(

        { type: CREATE_POST, payload: res.data });
};
