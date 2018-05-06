import client from '../helpers/client';
import { FETCH_SKILLS, SET_ACTIVE_SKILL } from './types';

export const fetchSkills = () => (dispatch) => {
  client.getEntry('5z6RRzwjqEoOImIMko28CC')
    .then(entry => dispatch({
      type: FETCH_SKILLS,
      payload: entry.fields.items,
    }));
};

export const setActiveSkill = (skill, bar) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_SKILL,
    payload: {
      color: skill.color,
      value: skill.value,
      bar,
    },
  });
};
