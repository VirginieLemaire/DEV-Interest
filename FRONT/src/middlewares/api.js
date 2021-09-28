import axios from 'axios';

import {
  ADD_CARD, fetchCards, FETCH_CARDS,
  isLoading, resetNewCard, saveCards, SEARCH_CARDS,
} from '../action/cards';
import {
  connectUser, LOGIN, SIGNUP,
} from '../action/user';

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
            console.log(response.data.data);
          },
        );
      next(action);
      break;
    case SEARCH_CARDS: {
      const { search } = store.getState().user;
      store.dispatch(isLoading());
      axiosInstance
        .get(`/cards/search?keyword=${search}`)
        .then(
          (response) => {
            store.dispatch(saveCards(response.data.data));
            console.log(`la résultat de la recherche avec le mot clé ${search} est:`, response.data.data);
          },
        );
      next(action);
      break;
    }
    case ADD_CARD: {
      const {
        title, slug, website, description, url, image, level, language, type, category, techs,
      } = store.getState().cards.newCard;

      const { id } = store.getState().user;

      const newCard = {
        title: title,
        slug: slug,
        website: website,
        description: description,
        url_image: image,
        url: url,
        user_id: id,
        level_id: level,
        language_id: language,
        type_id: type,
        category_id: category,
        techs: techs,
      };

      console.log(newCard);

      axiosInstance.post(
        '/cards',
        {
          ...newCard,
        },
      ).then(
        (response) => {
          console.log('il faut enregister ces informations', response);
          store.dispatch(resetNewCard());
          store.dispatch(fetchCards());
        },
      ).catch(
        () => console.log('error'),
      );
      break;
    }
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
          console.log('Le token enregistré est :', response.data.token);
          // autre possibilité, on stocke directement notre token dans l'objet axios
          // axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        },
      ).catch(
        () => console.log('error'),
      );
      next(action);
      break;
    }
    case SIGNUP: {
      const { username, email, password } = store.getState().user.newUser;

      // 1 - On conctace le point d'entrée de l'api pour s'authentifier
      // On envoie ici nos identifiants de cnnection (email et password)
      axiosInstance.post(
        '/signup',
        {
          username,
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
          console.log('Le token enregistré est :', response.data.token);
          // autre possibilité, on stocke directement notre token dans l'objet axios
          // axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        },
      ).catch(
        () => console.log('error'),
      );
      next(action);
      break;
    }
    // case ADD_TO_FAVORITES: {
    //   const { id } = store.getState().user;

    //   console.log(`je dois AJOUTER la carte ${action.cardId} à l'utilisateur ${id}`);
    //   break;
    // }
    // case REMOVE_FROM_FAVORITES: {
    //   const { id } = store.getState().user;
    //   console.log(`je dois RETIRER la carte ${action.cardId} à l'utilisateur ${id}`);
    //   break;
    // }
    default:
      next(action);
  }
};
