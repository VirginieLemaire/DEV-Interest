import axios from 'axios';

import { FETCH_CARDS, isLoading, saveCards } from '../action/cards';
import { connectUser, LOGIN } from '../action/user';

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
    case LOGIN: {
      const { email, password } = store.getState().user;

      // 1 - On conctace le point d'entrée de l'api pour s'authentifier
      // On envoie ici nos identifiants de cnnection (email et password)
      axiosInstance.post(
        '/login',
        {
          email,
          password,
        },
      ).then(
        (response) => {
          console.log('il faut enregister ces informations', response.data);
          // 2 - l'api nous renvoie nos infos, dont notre token jwt
          // c'est à a charge de le stocker - ici, nous avons choisi
          // de le stocker dans le state, c'est donc le reducer qui s'en chargera
          store.dispatch(connectUser(response.data));

          // autre possibilité, on stocke directement notre token dans l'objet axios
          // axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        },
      ).catch(
        () => console.log('error'),
      );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
