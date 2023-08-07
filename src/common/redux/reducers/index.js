import { combineReducers } from '@reduxjs/toolkit';
import persons from './person';
import cars from './car';

export default combineReducers({
  persons,
  cars,
});
