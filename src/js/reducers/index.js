import { combineReducers } from 'redux';
import about from './aboutReducer';
import navbar from './navbarReducer';
import skills from './skillReducer';
import portfolio from './portfolioReducer';

export default combineReducers({
  about,
  navbar,
  skills,
  portfolio,
});
