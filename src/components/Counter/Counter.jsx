import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT, RESET } from '../../store/counter/types';

function Counter() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: RESET })}>reset</button>
    </div>
  );
}

export default Counter;
