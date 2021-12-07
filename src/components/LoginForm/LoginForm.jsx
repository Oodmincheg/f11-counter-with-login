import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_LOGIN, UPDATE_PASSWORD } from '../../store/types';

const LoginForm = () => {
  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const updateLogin = (event) =>
    dispatch({ type: UPDATE_LOGIN, payload: event.target.value });

  const updatePassword = (event) =>
    dispatch({ type: UPDATE_PASSWORD, payload: event.target.value });

  const submitForm = () => {
    console.log(`Send to server ${login} ${password}`);
  };
  return (
    <form>
      <input
        placeholder="Enter login..."
        value={login}
        onChange={updateLogin}
      />
      <input
        placeholder="Enter password..."
        type="password"
        value={password}
        onChange={updatePassword}
      />
      <button type="button" onClick={submitForm}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
