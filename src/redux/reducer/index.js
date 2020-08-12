import LIST_ACTION_TYPES from "../actionTypes/";
import initialState from "../initialState"

const defaultState = initialState

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_ACTION_TYPES.POST_FORM_BEGIN: {
      const newState = {
        ...state,
        postFormPending: true
      };
      return newState;
    }
    case LIST_ACTION_TYPES.POST_FORM_SUCCESS: {
      const newState = {
        ...state,
        postFormData: action.payload,
        postFormPending: false,
        postFormFailure: false,
      };
      return newState;
    }
    case LIST_ACTION_TYPES.POST_FORM_FAILURE: {
      const newState = {
        ...state,
        postFormFailure: true,
        postFormPending: false
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;