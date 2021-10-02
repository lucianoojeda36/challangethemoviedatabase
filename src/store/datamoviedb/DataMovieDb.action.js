import axios from "axios";
// import { article} from '../../Nomalizr/schema/Schema'
// import { normalize } from 'normalizr';
// import normalize from 'json-api-normalizer';
export const POST_DATA_MOVIES = "POST_DATA_MOVIES";
export const GET_IS_LOADING_MDB = "GET_IS_LOADING_MDB";
export const GET_ERROR_MDB = "GET_ERROR_MDB";



export function getDataMovieDb(payload) {
   return (dispatch) => {
      axios.get(`https://api.themoviedb.org/3/search/person?language=en-US&page=1&include_adult=false&api_key=30db1237b9167f8afaf9e065b90d16b8&query=${payload}`)
         .then(data => {
            const normalized = data.data.results[0];
            dispatch({ type: POST_DATA_MOVIES, payload: normalized })
            dispatch({ type: GET_IS_LOADING_MDB, payload: true })
            
         })
         .catch((error) => {
            dispatch({ type: GET_ERROR_MDB, payload: true })
            return { error: error.message }
         })
   };
}
