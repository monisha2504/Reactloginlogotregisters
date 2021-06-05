import {combineReducers} from "redux";
import todoReducers from './todoReducers';
const rootReducers =combineReducers({
    todos:todoReducers
})
export default rootReducers