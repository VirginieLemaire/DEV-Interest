import { combineReducers } from 'redux';

import cardsReducer from './cards';
import userReducer from './user';

const rootReducer = combineReducers({
  cards: cardsReducer,
  user: userReducer,
});

export default rootReducer;
