import {
  UPDATE_TODO,
  UPDATE_TODOS,
  UPDATE_DESCRIPTION,
  DELETE_TODO_FROM_TODOS,
} from './types';

const todos = (
  state = { currentTodo: '', todos: [], description: '' },
  action,
) => {
  switch (action.type) {
    case UPDATE_TODO:
      return { ...state, currentTodo: action.payload };
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    case UPDATE_TODOS:
      const newTodo = {
        title: state.currentTodo,
        description: state.description,
        id: state.todos.length + 1,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        currentTodo: '',
        desctiption: '',
      };
    case DELETE_TODO_FROM_TODOS:
      const idForDelete = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== idForDelete);
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default todos;
