import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import {thunk} from 'redux-thunk';
import todoReducer from './Reducer/todoreducer';

// const store = createStore(todoReducer, applyMiddleware(thunk));
const Store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
