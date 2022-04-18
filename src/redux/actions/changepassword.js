import { CHANGE_PASSWORD} from '../types'
import api from "../../api";

export const changepassword =(values)=>dispatch=>{
  api({
    method:'post',
    url:'/change-password',
    data:{
      oldPassword:values.old_Password,
      newPAssword: values.new_Password,
      confirmPassword:values.confirm_Password
    }
  })
  .then((res)=>{
    const result = res.data;
    console.log(result);
  })
  .catch(err=>{console.log(err.message)})
}