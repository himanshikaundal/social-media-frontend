import { SETPROFILE } from "../types";

const initialValues={
  user:{},
  isLoading:true
}

const selfView =(state=initialValues,action)=>{
  switch(action.type){
    case SETPROFILE:
      let userEdit = action.payload;
      return {user:userEdit}
  }
}