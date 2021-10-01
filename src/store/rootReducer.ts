import { combineReducers } from 'redux';

import counterReducer from 'pages/Counter/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
