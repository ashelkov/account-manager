import { createStore } from 'redux';
import { combineReducers } from 'redux';
// reducers
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
