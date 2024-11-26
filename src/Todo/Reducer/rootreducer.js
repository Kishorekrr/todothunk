import { combineReducers } from 'redux';
import todoReducer from './todoreducer';
const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
