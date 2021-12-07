import { createStore } from 'redux';
import {
  DECREMENT,
  INCREMENT,
  RESET,
  UPDATE_LOGIN,
  UPDATE_PASSWORD,
} from './types';
// 1. pure function - withou side effects
// 2. always return state in default
// 3. reducer synchronyze
//4. always return new object

const reducer = (state = { counter: 0, login: '', password: '' }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      if (state.counter === 0) {
        return { counter: 0 };
      }
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    case UPDATE_LOGIN: {
      return { ...state, login: action.payload };
    }
    default:
      return state;
  }
};
// {type: "INCREMENT"}
const store = createStore(reducer);

export default store;
