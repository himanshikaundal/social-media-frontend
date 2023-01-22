import { GOOGLE_LOGIN, LOGIN, LOGIN_ERROR, LOGOUT } from "../types"
import api from "../../api";



export const googleLogin=(values)=>dispatch=>{

api({
  method:'post',
  url:'/google-login',
  data:{
    token:values.tokenId
  }
}).then(res=>{
    const result = res.data
    console.log(res)
    const { token, user } = result.data;
    console.log(user)
 
    dispatch({ type:GOOGLE_LOGIN, payload: {user,token }})
 
}).catch(rej=>console.log(rej));
}



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
         
            dispatch({ type: LOGIN, payload: {user,token },isUser:true})

        }).catch(rej => {
          
            dispatch({type:LOGIN_ERROR,payload:rej.response.data.message,isUser:false})
        }
            )

    }


export const logout=()=>dispatch=>{
  
     dispatch({type:LOGOUT});
    
}







