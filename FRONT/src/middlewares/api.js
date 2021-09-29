import axios from 'axios';

import {
  ADD_CARD, changeNewCardField, GET_OPENGRAPH_DATA, resetNewCard,
} from '../action/cardNew';

import { fetchCardsHome, FETCH_CARDS_HOME, saveCardsHome } from '../action/cardsHome';

import {
  changeSearchField, FETCH_CARDS_SEARCH, saveCardsSearch,
} from '../action/cardsSearch';

import { isLoading } from '../action/displayOptions';
import { connectUser, LOGIN, resteConnectingFields } from '../action/userConnect';
import { resetNewUserFields, SIGNUP } from '../action/userCreate';
import { toggleLogged } from '../action/userCurrent';
import { slugify } from '../selectors/cards';
import { capitalizeFirstLetter, getDomainName } from '../selectors/utils';

const axiosInstance = axios.create({
  baseURL: 'https://devinterest.herokuapp.com/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDS_HOME:
      store.dispatch(isLoading());
      axiosInstance
        .get('/cards')
        .then(
          (response) => {
            store.dispatch(saveCardsHome(response.data.data));
            // console.log(response.data.data);
            store.dispatch(isLoading());
          },
        );
      next(action);
      break;
    case FETCH_CARDS_SEARCH: {
      const { searchQuery } = store.getState().cardsSearch;
      store.dispatch(isLoading());
      if (searchQuery) {
        axiosInstance
          .get(`/cards/search?keyword=${searchQuery}&page=${1}&size=${30}`)
          .then(
            (response) => {
              store.dispatch(saveCardsSearch(response.data.data));
              console.log(`la résultat de la recherche avec le mot clé ${searchQuery} est:`, response.data.data);
              store.dispatch(changeSearchField('', 'search'));
              store.dispatch(isLoading());
            },
          );
      }
      if (!searchQuery) {
        axiosInstance
          .get('/cards')
          .then(
            (response) => {
              store.dispatch(saveCardsSearch(response.data.data));
              // console.log(response.data.data);
              store.dispatch(isLoading());
            },
          );
      }
      next(action);
      break;
    }

    case GET_OPENGRAPH_DATA: {
      const { url } = store.getState().cardNew;

      console.log('je vais utiliser l url', url, 'pour récupérer les info opengraph');
      store.dispatch(isLoading());
      axiosInstance.post(
        '/cards',
        {
          url,
        },
      ).then(
        (response) => {
          console.log('les données retournées par OpenGraph', response.data);
          if (response.data['og:description']) {
            store.dispatch(changeNewCardField(response.data['og:description'], 'description'));
          }
          if (response.data['og:title']) {
            const sluggedTitle = slugify(response.data['og:title']);
            store.dispatch(changeNewCardField(response.data['og:title'], 'title'));
            store.dispatch(changeNewCardField(sluggedTitle, 'slug'));
          }
          if (response.data['og:url']) {
            const websiteDomain = capitalizeFirstLetter(getDomainName(response.data['og:url']));
            store.dispatch(changeNewCardField(response.data['og:url'], 'url'));
            store.dispatch(changeNewCardField(websiteDomain, 'website'));
          }
          if (response.data['og:image']) {
            store.dispatch(changeNewCardField(response.data['og:image'], 'image'));
          }
          store.dispatch(isLoading());
        },
      ).catch(
        (error) => console.log('Error Opengraph', error),
      );
      break;
    }
    case ADD_CARD: {
      const {
        title, slug, website, description, url, image, level, lang, type, category, techs,
      } = store.getState().cardNew;

      const { id } = store.getState().userCurrent;

      const newCard = {
        title: title,
        slug: slug,
        website: website,
        description: description,
        url_image: image,
        url: url,
        user_id: id,
        level_id: level,
        language_id: lang,
        type_id: type,
        category_id: category,
        techs: techs,
      };

      console.log('la carte a enregistrer', newCard);

      axiosInstance.post(
        '/cards/save',
        {
          ...newCard,
        },
      ).then(
        (response) => {
          console.log('il faut enregister ces informations', response);
          store.dispatch(fetchCardsHome());
          store.dispatch(resetNewCard());
        },
      ).catch(
        () => console.log('error'),
      );
      break;
    }
    case LOGIN: {
      const { email, password } = store.getState().userConnect;

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
          console.log('response.data', response.data);
          // 2 - l'api nous renvoie nos infos, dont notre token jwt
          // c'est à a charge de le stocker - ici, nous avons choisi
          // de le stocker dans le state, c'est donc le reducer qui s'en chargera
          store.dispatch(connectUser(response.data));
          store.dispatch(resteConnectingFields());
          store.dispatch(toggleLogged());
          console.log('response.headers :', response.headers);
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
          store.dispatch(resetNewUserFields());
          store.dispatch(toggleLogged());
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
