import { LOGIN } from "../types"

export const login = (values) => dispatch => {
    dispatch({
        type: LOGIN,
        payload: "DATA"
    });
}
