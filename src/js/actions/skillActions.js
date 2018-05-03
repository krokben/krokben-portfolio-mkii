import { FETCH_SKILLS } from './types';

export const fetchSkills = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_SKILLS,
      payload: posts,
    }));
};
