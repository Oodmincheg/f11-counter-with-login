import { useSelector, useDispatch } from 'react-redux';
import {
  DELETE_TODO_FROM_TODOS,
  UPDATE_DESCRIPTION,
  UPDATE_TODO,
  UPDATE_TODOS,
} from '../../store/todos/types';

const TodoItem = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const deleteTodo = (id) =>
    dispatch({ type: DELETE_TODO_FROM_TODOS, payload: id });

  return (
    <div key={id}>
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={() => deleteTodo(id)}>x</button>
    </div>
  );
};

const TodosPage = () => {
  const todo = useSelector((state) => state.todos.currentTodo);
  //TODO: think about naming
  const todos = useSelector((state) => state.todos.todos);
  const description = useSelector((state) => state.todos.description);
  const dispatch = useDispatch();

  const updateTodo = (event) =>
    dispatch({ type: UPDATE_TODO, payload: event.target.value });

  const updateDescription = (event) =>
    dispatch({ type: UPDATE_DESCRIPTION, payload: event.target.value });

  const updateTodos = () => dispatch({ type: UPDATE_TODOS });

  return (
    <>
      <form>
        <input value={todo} onChange={updateTodo} placeholder="add todo..." />
        <input value={description} onChange={updateDescription} />
        <button type="button" onClick={updateTodos}>
          Add todo
        </button>
      </form>
      {todos.map(({ id, title, description }) => (
        <TodoItem id={id} title={title} description={description} />
      ))}
    </>
  );
};

export default TodosPage;
