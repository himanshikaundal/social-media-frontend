import { SIGNUP,UPDATE_PROFILE } from "../types";

const initialstate={
    user:{},
    userid:'',
    sigup:true
   
}


const userReducer=(state=initialstate,action)=>{
    switch(action){
        case SIGNUP:
            console.log(action.payload);
           
            return {user:action.payload}
     
    
            default:
                return state

    }

}

export default userReducer;