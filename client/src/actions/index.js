import axios from 'axios';
export const CREATE_POST = 'create_post';
export const LOAD_USER = 'load_user';
export const SHOW_USER = 'show_user';
export const FETCH_USER = 'fetch_user';
export const DELETE_USER = 'delete_user'
export const EDIT_USER = 'edit_user'
axios.defaults.withCredentials = true;
//https://webdevbootcamp-mazenoncloud9.c9users.io:8080
export const loadUser = () => async dispatch => {

    const res = await axios.get("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export const createPost = (values) => async dispatch => {

    const res = await axios.post("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting", values);
    //callback();
    dispatch(

        { type: CREATE_POST, payload: res.data });
};

export const fetchUser = (id) => async dispatch => {

    const res = await axios.get(`https://webdevbootcamp-mazenoncloud9.c9users.io:8080/restfulrouting/${id}/show`);

    dispatch(

        { type: FETCH_USER, payload: res.data });
};

export const deleteUser = (id, callback) => async dispatch => {

    const res = await axios.post(`https://webdevbootcamp-mazenoncloud9.c9users.io:8080/restfulrouting/${id}/distroy`);
    callback();
    dispatch(

        { type: DELETE_USER, payload: res.data });
};

export const editUser = (id, values, callback) => async dispatch => {

    const res = await axios.post(`https://webdevbootcamp-mazenoncloud9.c9users.io:8080/restfulrouting/${id}/edit`, values);
    callback();
    dispatch(

        { type: EDIT_USER, payload: res.data });
};
