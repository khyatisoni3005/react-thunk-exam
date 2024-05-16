import { movieListReducer } from "./movieList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    movie: movieListReducer
})
export default rootReducer