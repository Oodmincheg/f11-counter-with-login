import { SET_CHARACTERS_LIST, UPDATE_SEARCH_NAME } from './types';

export const rickNMorty = (
  state = { charactersList: [], searchName: '' },
  action,
) => {
  switch (action.type) {
    case SET_CHARACTERS_LIST:
      return { ...state, charactersList: action.payload };
    case UPDATE_SEARCH_NAME:
      return { ...state, searchName: action.payload };
    default:
      return state;
  }
};
