import { DECREMENT, INCREMENT, RESET } from './types';

export const counterReducer = (state = { counter: 0 }, action) => {
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
    default:
      return state;
  }
};
