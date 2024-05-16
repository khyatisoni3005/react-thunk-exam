import { GET_MOVIE_DATA } from "../type"

let initialState = {
    movieDataList: []
}

export const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DATA:
            console.log("action.payload", action.payload);
            return {
                ...state,
                movieDataList: action.payload
            }
        default:
            return {
                ...state
            }
    }
}