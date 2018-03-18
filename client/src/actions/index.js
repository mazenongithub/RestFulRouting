import axios from 'axios';
import { LOAD_USER } from './loaduser';
axios.defaults.withCredentials = true;
export const loadUser = () => async dispatch => {
    var baseurl = ""
    if (process.env.Node_ENV === 'production') {
        baseurl = ""
    }
    else {
        baseurl = "https://webdevbootcamp-mazenoncloud9.c9users.io:8080";
    }

    const res = await axios.get(baseurl + "/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};
