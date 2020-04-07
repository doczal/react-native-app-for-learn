import { SET_THING, TOGGLE_THING } from './actionTypes';

export const setThing = (thing) => ({
  type: SET_THING,
  thing,
});

export const toggleThing = () => ({
  type: TOGGLE_THING,
});
