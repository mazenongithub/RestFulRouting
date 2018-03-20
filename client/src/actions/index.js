import axios from 'axios';
import { LOAD_USER } from './loaduser';
import { CREATE_POST } from './createpost';
axios.defaults.withCredentials = true;
export const loadUser = () => async dispatch => {
    //loadallusers
    const res = await axios.get("/loadallusers");
    dispatch({ type: LOAD_USER, payload: res.data });
};

export const createPost = (values) => async dispatch => {
    //loadallusers
    const res = await axios.post("/RestFulRouting", values);
    dispatch(

        { type: CREATE_POST, payload: res.data });
};
