import { SIGNUP,UPDATE_PROFILE ,CHANGE_PASSWORD, SIGNUP_ERROR} from "../types";

const initialstate={
    user:{},
    userid:'',
    sigup:true,
    message:''
   
}


const userReducer=(state=initialstate,action)=>{
    switch(action.type){
        case SIGNUP:
           
            return {user:action.payload,message:action.message}

            case SIGNUP_ERROR:
                console.log(action.payload)
                return{message:action.payload,user:null}

     
        case CHANGE_PASSWORD:
            return {message:action.payload}
         

        default:
            return state

    }

}

export default userReducer;