import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  loading: false,
  hasErrors: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
      // Object.assign creates a new object with the same structure as state, but leaves state "pristine", i.e. untouched.
      // The reason we want to leave the initialState untouched is Redux-convention: avoid mutations in Redux.

    case FOUND_BAD_WORD:
      console.log('uh oh, found bad word');

    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });

    default:
      return state;
  }
}

export default rootReducer;
