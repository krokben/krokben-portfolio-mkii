import { combineReducers } from 'redux';
import navbar from './navbarReducer';
import skills from './skillReducer';

export default combineReducers({
  navbar,
  skills,
});
