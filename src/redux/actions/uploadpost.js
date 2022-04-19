import api from "../../api";
import { ADD_FEED } from "../types";


export const uploadPost = (values, token) => (dispatch) => {
    api({
        method: 'post',
        url: '/feeds',
        data: {
            content: values
        },
        headers: { authorization: `Bearer ${token}` }
    }).then((res) => {
        const result = res.data;
        console.log(result);
        dispatch({ type: ADD_FEED, payload: result })
    }).catch((err) => console.log(err))
}
