import { combineReducers } from "redux";
import loginReducer from "./usersLogin";
import userReducer from './userReducer'
import feedReducer from './addFeed'


const rootReducer = combineReducers({
    loginUser: loginReducer,
    user:userReducer,
    feed:feedReducer
});

export default rootReducer;