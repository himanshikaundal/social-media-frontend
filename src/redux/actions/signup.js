import {  SIGNUP } from "../types"
import api from "../../api";
import { useSelector } from "react-redux";

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
          const result = res.data;
          console.log(result);
         
          dispatch({ type: SIGNUP, payload:result.data})
      })
      .catch((error)=>{
     dispatch({type:SIGNUP,payload:error.response.data.data,message:error.response.data.message})

      } )
         
       
    }

