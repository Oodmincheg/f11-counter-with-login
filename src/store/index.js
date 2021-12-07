import { createStore } from 'redux';

// 1. pure function - withou side effects
// 2. always return state in default
// 3. reducer synchronyze

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
