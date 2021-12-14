import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { counterReducer } from './counter/reducer';
import { loginReducer } from './login/reducer';
import { rickNMorty } from './rickNMorty/reducer';
import todos from './todos/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ counterReducer, loginReducer, todos, rickNMorty }),
  composeEnhancers(applyMiddleware()),
);

export default store;
