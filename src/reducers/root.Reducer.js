import { combineReducers } from "redux";
import { vatInfo } from "./vatCheck.Reducer"

//combine reducers
const reducers = combineReducers({
    vatInfo,

})


export default reducers;