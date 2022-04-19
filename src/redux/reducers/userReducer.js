import { SIGNUP,UPDATE_PROFILE ,CHANGE_PASSWORD} from "../types";

const initialstate={
    user:{},
    userid:'',
    sigup:true,
    message:''
   
}


const userReducer=(state=initialstate,action)=>{
    switch(action){
        case SIGNUP:
            console.log(action.payload);
           
            return {user:action.payload}
     
        case CHANGE_PASSWORD:
            return {message:action.payload}
         

        default:
            return state

    }

}

export default userReducer;