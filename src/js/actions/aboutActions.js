import client from '../helpers/client';
import { FETCH_ABOUT_MARKDOWN } from './types';

export const fetchAboutMarkdown = () => (dispatch) => {
  client.getEntry('3lc4JofIec82UqaewckysE')
    .then(entry => dispatch({
      type: FETCH_ABOUT_MARKDOWN,
      payload: entry.fields.markdown,
    }));
};
