import songReducers from "./songReducers";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    songs: songReducers,
})

export default allReducers