import axios from 'axios';
export const CREATE_POST = 'create_post';
export const LOAD_USER = 'load_user';
export const SHOW_USER = 'show_user';
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
