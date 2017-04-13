import { combineReducers } from 'redux';
import room from './gameMenu';
import ship from './ship';

const rootReducer = combineReducers({
  room,
  ship
});

export default rootReducer;
