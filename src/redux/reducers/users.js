import { LOGIN,SIGNUP } from "../types";

const initState = {
user:{a:'hello' }
};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
           
           let userData=action.payload;
           console.log(userData)
            return {user:userData}

        case SIGNUP:
            return state;

        default:
            return state;
    }
};

export default usersReducer;