import { FETCH_SKILLS, SET_ACTIVE_SKILL } from '../actions/types';

const initialState = {
  items: [],
  bar1: { color: '#f1c40f', value: 10 },
  bar2: { color: '#d2d7d3', value: 8 },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_ACTIVE_SKILL:
      return {
        ...state,
        [action.payload.bar]: action.payload,
      };
    default:
      return state;
  }
}
