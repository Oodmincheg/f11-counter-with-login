import { useSelector, useDispatch } from 'react-redux';
import {
  UPDATE_SEARCH_NAME,
  SET_CHARACTERS_LIST,
} from '../../store/rickNMorty/types';

const FindForm = () => {
  const searchName = useSelector((state) => state.rickNMorty.searchName);
  const dispatch = useDispatch();

  const findCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchName}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: SET_CHARACTERS_LIST, payload: data.results }),
      );
  };

  return (
    <form>
      <input
        value={searchName}
        onChange={(event) =>
          dispatch({ type: UPDATE_SEARCH_NAME, payload: event.target.value })
        }
        placeholder="Input name..."
        name="name"
      ></input>
      <button type="button" onClick={findCharacter}>
        Find
      </button>
    </form>
  );
};

export default FindForm;
