import axios from "axios";
// import { article} from '../../Nomalizr/schema/Schema'
// import { normalize } from 'normalizr';
import {apiKey_mdb} from '../../api/config';
export const POST_DATA_MOVIES = "POST_DATA_MOVIES";
export const GET_IS_LOADING_MDB = "GET_IS_LOADING_MDB";
export const GET_ERROR_MDB = "GET_ERROR_MDB";

export function getDataMovieDb(payload: String) {
  return (dispatch: any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?language=en-US&page=1&include_adult=false&api_key=${apiKey_mdb}&query=${payload}`
      )
      .then((data: any) => {
        const normalized = data.data.results[0];
        dispatch({ type: POST_DATA_MOVIES, payload: normalized });
        dispatch({ type: GET_IS_LOADING_MDB, payload: true });
      })
      .catch((error: any) => {
        dispatch({ type: GET_ERROR_MDB, payload: true });
        return { error: error.message };
      });
  };
}
