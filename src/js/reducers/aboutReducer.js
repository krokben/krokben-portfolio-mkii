import { FETCH_ABOUT_MARKDOWN } from '../actions/types';

const initialState = {
  markdown: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ABOUT_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
      };
    default:
      return state;
  }
}
