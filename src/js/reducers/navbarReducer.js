import { DISPLAY_NAVBAR } from '../actions/types';

const initialState = {
  display: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NAVBAR:
      return {
        ...state,
        display: state.display ? null : 'active',
      };
    default:
      return state;
  }
}
