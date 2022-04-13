import { LOGIN, SIGNUP } from "../types";

const initState = {
    user:{},
    isLoading: false,

};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            let userData = action.payload;
            return { user: userData }
        case SIGNUP:
            return state

        default:
            return state;
    }
};

export default usersReducer;