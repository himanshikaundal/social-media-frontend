import { GOOGLE_LOGIN, LOGIN, LOGIN_ERROR, LOGOUT} from "../types";

const initState = {
    user: {},
    userid: '',
    token: '',
    message:'',


};

const loginReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            let userData = action.payload.user;
            let id = action.payload.user._id;
            return { user: userData, userid: id, token: action.payload.token }
            
        case LOGIN_ERROR:
            
            return{message:action.payload}

        case GOOGLE_LOGIN:
             console.log(action.payload);
            return { user: action.payload.user, userid: action.payload.user._id, token: action.payload.token }


        case LOGOUT:

            return null;


        default:
            return state;
    }
};

export default loginReducer;