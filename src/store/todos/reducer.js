import { UPDATE_TODO, UPDATE_TODOS } from './types';

const todos = (state = { currentTodo: '', todos: [] }, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return { ...state, currentTodo: action.payload };
    case UPDATE_TODOS:
      return {
        ...state,
        todos: [...state.todos, state.currentTodo],
        currentTodo: '',
      };
    default:
      return state;
  }
};

export default todos;
