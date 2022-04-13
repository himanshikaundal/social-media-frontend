import { combineReducers } from "redux";
import usersReducer from "./usersLogin";

const rootReducer = combineReducers({
    loginUser: usersReducer
});

export default rootReducer;