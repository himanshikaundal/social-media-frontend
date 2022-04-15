import { LOGIN, LOGOUT, SIGNUP } from "../types";

const initState = {
    user:{},
   
};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            let userData = action.payload;
            return { user: userData }
      
        case LOGOUT:
            return null;


        default:
            return state;
    }
};

export default usersReducer;