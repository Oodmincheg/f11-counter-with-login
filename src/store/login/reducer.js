import { UPDATE_LOGIN, UPDATE_PASSWORD } from './types';

export const loginReducer = (state = { login: '', password: '' }, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.payload };
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};
