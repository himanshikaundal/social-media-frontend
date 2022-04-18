import { LOGIN, LOGOUT, SIGNUP, UPDATE_PROFILE } from "../types";

const initState = {
    user: {},
    userid: ''

};

const loginReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            let userData = action.payload;
            let id = action.payload._id
            return { user: userData, userid: id }

            

        case LOGOUT:

            return null;


        default:
            return state;
    }
};

export default loginReducer;