import api from "../../api";
import { ADD_FEED } from "../types";


export const uploadPost = (data, token) => (dispatch) => {
    api({
        method: 'post',
        url: '/feeds',
        data:data,
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((res) => {
        const result = res.data;
        console.log(result);
        dispatch({ type: ADD_FEED })

    }).catch((err) => console.log(err))
}
