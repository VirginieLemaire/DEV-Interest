import { FETCH_CARDS, isLoading, saveCards } from "../action/cards";

import fakeData from '../data';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDS:
      store.dispatch(isLoading())
      store.dispatch(saveCards(fakeData))
      next(action);
      break;
    default:
      next(action);
  }
};
