/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {fetch} from './Auth';

const rootReducer = combineReducers({
  auth: fetch,
});

export default rootReducer;
