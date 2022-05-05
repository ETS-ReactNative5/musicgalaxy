import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const middleware = [thunkMiddleware];

// Add middleware in development for alerting when mutating redux state.
if (process.env.NODE_ENV === 'development') {
  middleware.unshift(reduxImmutableStateInvariant());
}

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
