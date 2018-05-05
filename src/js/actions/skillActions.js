import client from '../helpers/client';
import { FETCH_SKILLS } from './types';

export const fetchSkills = () => (dispatch) => {
  client.getEntry('27TBtHc1aA8KSSQkyQE6cC')
    .then(entry => dispatch({
      type: FETCH_SKILLS,
      payload: entry.fields.skills,
    }));
};
