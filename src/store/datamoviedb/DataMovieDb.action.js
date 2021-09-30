import axios from "axios";
// import { article} from '../../Nomalizr/schema/Schema'
// import { normalize } from 'normalizr';
// import normalize from 'json-api-normalizer';
export const POST_DATA_MOVIES = "POST_DATA_MOVIES";




// export const findOrCreateOrders = (userId) => {
//   return (dispatch) => {
//     axios.post(`/orders/cart/${userId}`).then((res) => {
//       dispatch({ type: POST_DATA_MOVIES, payload: res.data })
//     });
//   };
// };

const pepe = { 
  "id": 1,
  "title": "My blogpost",
  "description": "Short blogpost description",
  "content": "Hello world",
  "author": { 
     "id": 1,
     "name": "John Doe"
  },
  "comments": [ 
     { 
        "id": 1,
        "author": "Rob",
        "content": "Nice post!"
     },
     { 
        "id": 2,
        "author": "Jane",
        "content": "I totally agree with you"
     }
  ]
}

export function getDataMovieDb (payload) {
  return (dispatch) => {
       axios.get(`https://api.themoviedb.org/3/search/person?language=en-US&page=1&include_adult=false&api_key=30db1237b9167f8afaf9e065b90d16b8&query=${payload}`)
      // .then(res => res.json())
      .then(data => {
        const normalized = data.data.results[0];
        dispatch( {type: POST_DATA_MOVIES, payload:normalized});
      })
      .catch((error) => { return {error: error.message} })
  };
}
