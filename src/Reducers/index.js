import { combineReducers } from "redux";
import LoginReducer from './Login';

export default combineReducers({
    login: LoginReducer
});