import { combineReducers } from 'redux';

import displayOptionsReducer from './displayOptions';

import userCurrentReducer from './userCurrent';
import userConnectReducer from './userConnect';
import userCreateReducer from './userCreate';
import userUpdateReducer from './userUpdate';

import cardNewReducer from './cardNew';
import cardsSearchReducer from './cardsSearch';
import cardsHomeReducer from './cardsHome';

import cardsReducer from './cards';
import userReducer from './user';

const rootReducer = combineReducers({
  cardsSearch: cardsSearchReducer,
  cardsHome: cardsHomeReducer,
  cardNew: cardNewReducer,
  displayOptions: displayOptionsReducer,
  userUpdate: userUpdateReducer,
  userCreate: userCreateReducer,
  userCurrent: userCurrentReducer,
  userConnect: userConnectReducer,
  cards: cardsReducer,
  user: userReducer,
});

export default rootReducer;
