import client from '../helpers/client';
import { FETCH_ABOUT_IMAGE, FETCH_ABOUT_MARKDOWN } from './types';

export const fetchAboutImage = () => (dispatch) => {
  client.getAsset('5yBN3awrPqeYMygAkAMmuC')
    .then(entry => dispatch({
      type: FETCH_ABOUT_IMAGE,
      payload: {
        description: entry.fields.description,
        url: entry.fields.file.url,
      },
    }));
};

export const fetchAboutMarkdown = () => (dispatch) => {
  client.getEntry('3lc4JofIec82UqaewckysE')
    .then(entry => dispatch({
      type: FETCH_ABOUT_MARKDOWN,
      payload: entry.fields.markdown,
    }));
};
