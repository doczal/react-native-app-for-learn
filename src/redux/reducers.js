import { TOGGLE_THING, SET_THING } from './actionTypes';

const initialState = {
  active: false,
  news: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THING: {
      return {
        ...state,
        active: !state.active,
      };
    }
    case SET_THING: {
      return {
        ...state,
        news: action.thing,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
