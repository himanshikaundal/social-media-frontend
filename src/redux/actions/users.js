import { LOGIN, LOGOUT } from "../types"
import api from "../../api";
import { useSelector } from "react-redux";
export const login = (values) => dispatch => {
    api({
        method: 'post',
        url: '/login',
        data: {
            username: values.email,
            password: values.password
        }
    })
        // .then(res=>res.data)
        .then((res) => {
            const result = res.data
            const { token, user } = result.data;
            // window.localStorage.getItem('token',token)
            dispatch({ type: LOGIN, payload: user })
        }).catch(rej => console.log(rej));


}



export const logout=()=>dispatch=>{
    return dispatch({type:LOGOUT})
}






