import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { counter } from '../reducers/count';

const store = createStore(combineReducers({ counter }), applyMiddleware(thunk));

export { store };
