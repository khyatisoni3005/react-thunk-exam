import { GET_MOVIE_DATA } from "../type";
import axios from "axios";



const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2EwNTE0OThjZWZjNmU2ZTdkNWNkZjI2MTJiOWU2YyIsInN1YiI6IjY2NDVjMWRlNWYyZWNmYzU2YjQwZmNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GmbgUTpK8_QpkW4Ooa_DwyrYxUg7CYwYq919eekNSBI'
    }
};
export const getMovieData = () => {
    return (dispatch) => {
        axios.get(url, options)
            .then((res) => {
                console.log(res.data.results, "res.daat");
                dispatch({
                    type: GET_MOVIE_DATA,
                    payload: res.data.results
                })
            })
    }

}