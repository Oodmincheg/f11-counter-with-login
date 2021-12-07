import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/reducer';
import { loginReducer } from './login/reducer';
// 1. pure function - withou side effects
// 2. always return state in default
// 3. reducer synchronyze
//4. always return new object

// {type: "INCREMENT"}
const store = createStore(combineReducers({ counterReducer, loginReducer }));

// {
//   counterReducer: {
//     counter: 0;
//     },
//     loginReducer: {
//         login: '',
//         password: ''
//     }
// }
export default store;
