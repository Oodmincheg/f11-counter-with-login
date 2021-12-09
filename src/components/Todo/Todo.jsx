import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TODO, UPDATE_TODOS } from '../../store/todos/types';

const Todo = () => {
  const todo = useSelector((state) => state.todos.currentTodo);
  //TODO: think about naming
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const updateTodo = (event) =>
    dispatch({ type: UPDATE_TODO, payload: event.target.value });

  const updateTodos = () => dispatch({ type: UPDATE_TODOS });
  return (
    <>
      <form>
        <input value={todo} onChange={updateTodo} placeholder="add todo..." />
        <button type="button" onClick={updateTodos}>
          Add todo
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
    </>
  );
};

export default Todo;
