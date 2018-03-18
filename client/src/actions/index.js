import axios from 'axios';
import { LOAD_USER } from './loaduser';
axios.defaults.withCredentials = true;
export const loadUser = () => async dispatch => {
    const theurl = null;
    if (process.env.NODE_ENV === 'production') {
        theurl = "/loadallusers"
    }
    else {
        theurl = "https://webdevbootcamp-mazenoncloud9.c9users.io:8081/loadallusers"
    }
    console.log(theurl);
    const res = await axios.get("/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};
