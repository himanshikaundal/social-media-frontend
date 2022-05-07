import api from "../../api";
import { COMMENT } from "../types";



export const createComment=(values,token)=>(dispatch)=>{
    api({
        method:'post',
        url:'/comment',
        data:values,
        headers:{authorization:`Bearer ${token}`}
    }).then(res=>{
        const result=res.data;
        dispatch({type:COMMENT,payload:result.data})
    }).catch(rej=>console.log(rej));

}