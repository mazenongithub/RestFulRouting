import axios from 'axios';
import { LOAD_USER } from './loaduser';
axios.defaults.withCredentials = true;
export const loadUser = () => async dispatch => {


    const res = await axios.get("/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};
