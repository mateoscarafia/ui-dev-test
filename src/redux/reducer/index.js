import LIST_ACTION_TYPES from "../actionTypes/";
import initialState from "../initialState"

const defaultState = initialState

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_ACTION_TYPES.POST_TEXT_BEGIN: {
      const newState = {
        ...state,
        postTextPending: true
      };
      return newState;
    }
    case LIST_ACTION_TYPES.POST_TEXT_SUCCESS: {
      const newState = {
        ...state,
        postTextData: action.payload,
        postTextPending: false,
        postTextFailure: false,
      };
      return newState;
    }
    case LIST_ACTION_TYPES.POST_TEXT_FAILURE: {
      const newState = {
        ...state,
        postTextFailure: true,
        postTextPending: false
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;