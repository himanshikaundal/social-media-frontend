import { SIGNUP, UPDATE_PROFILE, CHANGE_PASSWORD, SIGNUP_ERROR } from "../types";

const initialstate = {
    status: null,
    message: '',


}


const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SIGNUP:

            return { message: "signup successfully" }

        case SIGNUP_ERROR:
            console.log(action.payload)
            return { message: action.payload.message, status: action.payload.status }


        case CHANGE_PASSWORD:
            return { message: action.payload }


        default:
            return state

    }

}

export default userReducer;