import axios from 'axios';
import { LOAD_USER } from './loaduser';
axios.defaults.withCredentials = true;
export const loadUser = () => async dispatch => {
    //const url = " ";
    //if (process.env.NODE_ENV === 'production') {
    //url = "/loadallusers"
    //}
    //else {
    //url = "https://webdevbootcamp-mazenoncloud9.c9users.io:8081/loadallusers"
    //}
    const res = await axios.get("/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};
