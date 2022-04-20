import { SIGNUP,UPDATE_PROFILE ,CHANGE_PASSWORD} from "../types";

const initialstate={
    user:{},
    userid:'',
    sigup:true,
    message:''
   
}


const userReducer=(state=initialstate,action)=>{
    switch(action.type){
        case SIGNUP:
            // const user=action.payload;
            
            // if(user){
            //     return {user:action.payload}
            // }
           
            return {user:action.payload,message:action.message}
     
        case CHANGE_PASSWORD:
            return {message:action.payload}
         

        default:
            return state

    }

}

export default userReducer;