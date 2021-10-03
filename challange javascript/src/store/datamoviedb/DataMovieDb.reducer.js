import {
  POST_DATA_MOVIES,
  GET_ERROR_MDB,
  GET_IS_LOADING_MDB,
} from "./DataMovieDb.action";

var initialState = {
  user: [],
  error_message: false,
  isLoading: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_MOVIES:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ERROR_MDB:
      return {
        ...state,
        error_message: action.payload,
      };
    case GET_IS_LOADING_MDB:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
