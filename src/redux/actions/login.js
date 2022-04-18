import { LOGIN, LOGOUT } from "../types"
import api from "../../api";


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
            console.log(res)
            const { token, user } = result.data;
            console.log(user)
         
            dispatch({ type: LOGIN, payload: {user,token }})
        }).catch(rej => console.log(rej))

    }
export const logout=()=>dispatch=>{
    
     dispatch({type:LOGOUT});
    
}







