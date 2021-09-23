import axios from 'axios';

import { FETCH_CARDS, isLoading, saveCards } from '../action/cards';

const axiosInstance = axios.create({
  baseURL: 'https://devinterest.herokuapp.com/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDS:
      store.dispatch(isLoading());
      axiosInstance
        .get('/cards')
        .then(
          (response) => {
            store.dispatch(saveCards(response.data.data));
          },
        );
      next(action);
      break;
    default:
      next(action);
  }
};
