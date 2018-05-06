import { FETCH_ABOUT_IMAGE, FETCH_ABOUT_MARKDOWN } from '../actions/types';

const initialState = {
  image: {},
  markdown: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ABOUT_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case FETCH_ABOUT_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
      };
    default:
      return state;
  }
}
