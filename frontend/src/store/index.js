import { createStore, applyMiddleware } from 'redux';
import { authReducer } from './reducers/authReducer'
import thunk from 'redux-thunk';

// const initialState = {
//     token: null,
// };

// const reducer = (state = initialState, action) => {
//     return state
// }

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;