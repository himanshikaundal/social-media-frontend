import { LOGIN, LOGOUT, SIGNUP } from "../types"
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
            console.log(user)
            // window.localStorage.getItem('token',token)
            dispatch({ type: LOGIN, payload: user })
        }).catch(rej => console.log(rej));


}

export const signup = (values) => dispatch => {
    api({
        method: 'post',
        url: '/signup',
        data: {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password
        }
    })
        .then((res) => {
            const result = res.data
            console.log(result);
            dispatch({ type: SIGNUP, payload: result })
        }).catch(rej => console.log(rej));

}

export const logout=()=>dispatch=>{
  
    return dispatch({type:LOGOUT});
    
}


// export const SelfView=function(values){
//     const user=useSelector(state=>state.loginUser);
//     return function(dispatch){
         
//     }
// }





