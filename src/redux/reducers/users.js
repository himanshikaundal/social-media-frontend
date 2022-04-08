import { LOGIN } from "../types";

const initState = {};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            return state;

        default:
            return state;
    }
};

export default usersReducer;