import {
  POST_DATA_MOVIES,
} from "./DataMovieDb.action";

var initialState = {
  user: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_MOVIES:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
