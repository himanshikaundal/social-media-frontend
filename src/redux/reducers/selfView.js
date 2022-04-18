import { SET_PROFILE } from "../types";

const initialValues={
  user:{},
  isLoading:true
}

const selfView =(state=initialValues,action)=>{
  switch(action.type){
    case SET_PROFILE:
      let userEdit = action.payload;
      return {user:userEdit}
  }
}