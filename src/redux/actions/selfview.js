import {  SET_PROFILE } from "../types"
import api from "../../api";
import { useSelector } from "react-redux";

export const selfView=function(values){
 
  return function(dispatch){

      api({
          method: 'put',
          url: '/editProfile',
          data: {
              name: values.name,
              email: values.email,
              gender: values.gender,
              state: values.state,
              country: values.country,
              city: values.city,
              website: values.website,
              bday: values.bday,
              headline:values.headline,

          }
      })
          // .then(res=>res.data)
          .then((res) => {
              const result = res.data
              const { token, user } = result.data;
              // window.localStorage.getItem('token',token)
              dispatch({ type: SET_PROFILE, payload: user })
          }).catch(rej => console.log(rej));


       
  }
}
