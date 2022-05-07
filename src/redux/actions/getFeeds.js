import api from "../../api";
import { GET_FEED } from "../types";

export const getPost=()=>(dispatch)=>{
    api({
        method: 'get',
        url: '/feeds'
       
    }).then(res=>{
        const result=res.data
        console.log(result.data)
         dispatch({type:GET_FEED,payload:result.data});
        
    }).catch(err=>{
        console.log(err);
    })
}