import { DISPLAY_NAVBAR } from './types';

export const displayNavbar = () => (dispatch) => {
  dispatch({
    type: DISPLAY_NAVBAR,
  });
};
