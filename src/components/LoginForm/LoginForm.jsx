import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_LOGIN } from '../../store/types';

const LoginForm = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const updateLogin = (event) =>
    dispatch({ type: UPDATE_LOGIN, payload: event.target.value });

  return (
    <form>
      <input
        placeholder="Enter login..."
        value={login}
        onChange={updateLogin}
      />
      <input placeholder="Enter password..." type="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
