import { combineReducers } from "redux";
import loginReducer from "./usersLogin";
import userReducer from './userReducer'


const rootReducer = combineReducers({
    loginUser: loginReducer,
    user:userReducer
});

export default rootReducer;