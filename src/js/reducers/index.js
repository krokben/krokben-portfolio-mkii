import { combineReducers } from 'redux';
import about from './aboutReducer';
import navbar from './navbarReducer';
import skills from './skillReducer';

export default combineReducers({
  about,
  navbar,
  skills,
});
