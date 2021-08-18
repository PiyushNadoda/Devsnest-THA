import todoReduce from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReduce,
})

export default rootReducer;