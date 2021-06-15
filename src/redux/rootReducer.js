import { combineReducers } from "redux";
import loginReducer from "../reducer/loginReducer";
const rootReducer = combineReducers({
  isLoggedIn: loginReducer,
});
export default rootReducer;
