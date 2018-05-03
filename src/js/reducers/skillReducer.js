import { FETCH_SKILLS } from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
