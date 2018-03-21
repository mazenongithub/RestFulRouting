import axios from 'axios';
export const CREATE_POST = 'create_post';
export const LOAD_USER = 'load_user';
export const SHOW_USER = 'show_user';
axios.defaults.withCredentials = true;
//https://webdevbootcamp-mazenoncloud9.c9users.io:8080
export const loadUser = () => async dispatch => {

    const res = await axios.get("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export function createPost(values, callback) {
    const req = axios.post("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting", values)
        .then(() => callback())
    return {
        type: CREATE_POST,
        payload: req
    }
}

//export const createPost = (values, callback) => async dispatch => {

//const res = await axios.post("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting", values);

//dispatch(

//{ type: CREATE_POST, payload: res.data });
//callback();

//}
