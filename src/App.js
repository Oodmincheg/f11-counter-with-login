import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state);
  return (
    <div>
      <h4>{counter}</h4>
      <button>+</button>
      <button>-</button>
      <button>reset</button>
    </div>
  );
}

export default App;
