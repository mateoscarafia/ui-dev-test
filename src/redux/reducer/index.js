import LIST_ACTION_TYPES from "../actionTypes/";
import initialState from "../initialState"

const defaultState = initialState

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_ACTION_TYPES.GET_POKEMONS_BEGIN: {
      const newState = {
        ...state,
        getPokemonsPending: true
      };
      return newState;
    }
    case LIST_ACTION_TYPES.GET_POKEMONS_SUCCESS: {
      const newState = {
        ...state,
        getPokemonsData: action.payload,
        getPokemonsPending: false,
        getPokemonsFailure: false,
      };
      return newState;
    }
    case LIST_ACTION_TYPES.GET_POKEMONS_FAILURE: {
      const newState = {
        ...state,
        getPokemonsFailure: true,
        getPokemonsPending: false
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;