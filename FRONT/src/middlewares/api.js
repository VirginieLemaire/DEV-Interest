/* eslint-disable no-console */
import axios from 'axios';

import {
  ADD_CARD, changeNewCardField, GET_OPENGRAPH_DATA, resetNewCard,
} from '../action/cardNew';

import {
  fetchCardsHome, FETCH_CARDS_HOME, LOAD_MORE_HOME_CARDS,
  NextPageHome, saveCardsHome, saveMoreHomeCards,
} from '../action/cardsHome';

import {
  changeSearchField, FETCH_CARDS_MINI_SEARCH, FETCH_CARDS_SEARCH, LOAD_MORE_RESULTS,
  NextPage, saveCardsMiniSearch, saveCardsSearch, saveMoreCards,
} from '../action/cardsSearch';
import {
  addCardThankModal,
  createAccountThankModal,
  deleteUserSuccessModal,
  setAppLoading, setLoading, setMore, setMoreHome, toggleModal,
} from '../action/displayOptions';

import {
  DELETE_USER_CURRENT, UPDATE_USER_CURRENT, resetUpdateUserFields,
} from '../action/userUpdate';

import {
  connectUser, LOGIN, resetConnectingFields,
} from '../action/userConnect';
import { resetNewUserFields, SIGNUP } from '../action/userCreate';
import {
  ADD_TO_BOOKMARKS,
  FETCH_BOOKMARKED_CARDS, READ_USER_CURRENT_DATA,
  REMOVE_FROM_BOOKMARKS, saveBookmarkedCards, toggleLogged, updateBookmarks, userLogout,
} from '../action/userCurrent';
import { slugify } from '../selectors/cards';
import { capitalizeFirstLetter, getDomainName } from '../selectors/utils';
import UpdateAccountSuccessModal from '../components/Modals/UpdateAccountSuccessModal';

const axiosInstance = axios.create({
  baseURL: 'https://devinterest.herokuapp.com/',
});

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CARDS_HOME: {
      const { size } = store.getState().cardsHome;
      store.dispatch(setMoreHome(true));
      store.dispatch(setLoading(true));
      const firstPage = 1;

      console.log('----------------------------------------------------------');
      console.log('Je demande au serveur de me retourner les premières cartes pour l\'accueil');
      console.log(`Route empreintée en GET : /cards?page=${firstPage}&size=${size}`);

      axiosInstance
        .get(`/cards?page=${firstPage}&size=${size}`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
            console.log(response.data.data);

            store.dispatch(saveCardsHome(response.data.data));
            store.dispatch(NextPageHome());
            store.dispatch(setAppLoading(false));
            store.dispatch(setLoading(false));
          },
        ).catch(
          (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
        );
      next(action);
      break;
    }
    case LOAD_MORE_HOME_CARDS: {
      const { page, size } = store.getState().cardsHome;

      console.log('----------------------------------------------------------');
      console.log(`En scrollant en bas, je demande au serveur de me retourner les cartes suivantes pour l'accueil (page ${page})`);
      console.log(`Route empreintée en GET : /cards?page=${page}&size=${size}`);

      axiosInstance
        .get(`/cards?page=${page}&size=${size}`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
            console.log(response.data.data);

            store.dispatch(saveMoreHomeCards(response.data.data));
            store.dispatch(NextPageHome());

            if (response.data.data.length < size) {
              store.dispatch(setMoreHome(false));
            }
          },
        )
        .catch(
          (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
        );
      next(action);
      break;
    }
    case FETCH_CARDS_MINI_SEARCH: {
      const { searchQuery } = store.getState().cardsSearch;
      console.log('----------------------------------------------------------');
      console.log(`Je demande au serveur de me retourner les cartes pour la MINI recherche de la searchbard avec les mots-clés: ${searchQuery}`);
      console.log(`Route empreintée en GET : /cards/search?keyword=${searchQuery}&page=${1}&size=${3}`);

      axiosInstance
        .get(`/cards/search?keyword=${searchQuery}&page=${1}&size=${3}`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
            console.log(response.data);
            store.dispatch(saveCardsMiniSearch(response.data.data));
          },
        )
        .catch(
          (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
        );
      next(action);
      break;
    }
    case FETCH_CARDS_SEARCH: {
      const { searchQuery, size } = store.getState().cardsSearch;
      store.dispatch(setMore(true));
      store.dispatch(setLoading(true));
      const firstPage = 1;

      console.log('----------------------------------------------------------');
      console.log(`Je demande au serveur de me retourner les cartes pour la recherche avec les mots-clés: ${searchQuery}`);
      console.log(`Route empreintée en GET : /cards/search?keyword=${searchQuery}&page=${firstPage}&size=${size}`);

      if (searchQuery) {
        axiosInstance
          .get(`/cards/search?keyword=${searchQuery}&page=${firstPage}&size=${size}`)
          .then(
            (response) => {
              console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
              console.log(response.data.data);

              store.dispatch(saveCardsSearch(response.data.data));
              store.dispatch(NextPage());
              store.dispatch(changeSearchField('', 'search'));
              store.dispatch(setLoading(false));
            },
          )
          .catch(
            (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
          );
      }
      if (!searchQuery) {
        store.dispatch(setLoading(true));

        console.log('----------------------------------------------------------');
        console.log('Je demande au serveur de me retourner les cartes pour la recherche par défaut sans mot clé');
        console.log('Route empreintée en GET : /cards');

        axiosInstance
          .get('/cards')
          .then(
            (response) => {
              console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
              console.log(response.data.data);

              store.dispatch(saveCardsSearch(response.data.data));
              store.dispatch(setLoading(false));
            },
          )
          .catch(
            (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
          );
      }
      next(action);
      break;
    }
    case LOAD_MORE_RESULTS: {
      const { page, currentSearch, size } = store.getState().cardsSearch;

      console.log('----------------------------------------------------------');
      console.log(`En scrollant en bas de la page, je demande au serveur de me retourner les cartes pour la recherche avec les mots-clés: ${currentSearch}`);
      console.log(`Route empreintée en GET : /cards/search?keyword=${currentSearch}&page=${page}&size=${size}`);

      axiosInstance
        .get(`/cards/search?keyword=${currentSearch}&page=${page}&size=${size}`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
            console.log(response.data.data);

            store.dispatch(saveMoreCards(response.data.data));
            store.dispatch(NextPage());
            store.dispatch(changeSearchField('', 'search'));
            if (response.data.data.length < 15) {
              store.dispatch(setMore(false));
            }
          },
        ).catch(
          (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
        );
      next(action);
      break;
    }
    case GET_OPENGRAPH_DATA: {
      const { url } = store.getState().cardNew;

      console.log('----------------------------------------------------------');
      console.log(`J'envoi le lien ${url} (par le body) pour avoir le retour OpenGrah`);
      console.log('Route empreintée en POST : /cards ( + url dans le Body)');

      store.dispatch(setLoading(true));
      axiosInstance.post(
        '/cards',
        {
          url,
        },
      ).then(
        (response) => {
          console.log('Retour du serveur POSITIF, les données retournées par OpenGraph sont ', response.data);

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
          store.dispatch(setLoading(false));
        },
      ).catch(
        (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
      );
      next(action);
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

      console.log('----------------------------------------------------------');
      console.log('Je souhaite ajouer une carte sur le serveur');
      console.log('Route empreintée en POST : /cards/save (+ données suivantes dans le body)');
      console.log(newCard);

      axiosInstance.post(
        '/cards/save',
        {
          ...newCard,
        },
      ).then(
        (response) => {
          console.log('L\'enregistrement de la carte a REUSSI ! et les informations ont bien été récupérées par le FRONT', response);
          store.dispatch(toggleModal());
          store.dispatch(addCardThankModal());
          store.dispatch(fetchCardsHome());
          store.dispatch(resetNewCard());
        },
      ).catch(
        (error) => console.log('ERREUR, Le serveur n\'a pas réussi à enregistrer la carte et retourne l\'erreur suivante', error.response),
      );
      next(action);
      break;
    }
    case LOGIN: {
      const { email, password } = store.getState().userConnect;

      console.log('----------------------------------------------------------');
      console.log(`Je prépare les infos suivant pour le login: email: ${email} et password: ${password}`);
      console.log('Route empreintée en POST : /login ( + mail et password dans le Body)');

      axiosInstance.post(
        '/login',
        {
          email,
          password,
        },
      ).then(
        (response) => {
          console.log('Connection du user REUSSI ! Je reçois du serveur ces données (response.data.user) :', response.data.user);
          console.log('Le serveur me donne aussi le Token suivant lors du login (response.data.accessToken) :', response.data.accessToken);

          store.dispatch(connectUser(response.data.user));
          store.dispatch(resetConnectingFields());
          store.dispatch(toggleLogged());

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
        },
      ).catch(
        (error) => console.log('ERREUR lors du login et voici le error.response: ', error.response),
      );
      next(action);
      break;
    }
    case FETCH_BOOKMARKED_CARDS: {
      store.dispatch(setLoading(true));
      const { id } = store.getState().userCurrent;

      console.log('----------------------------------------------------------');
      console.log(`Je demande au serveur de me retourner les cartes bookmarks du user ${id}`);
      console.log(`Route empreintée en GET : /users/${id}/bookmarks`);

      axiosInstance
        .get(`/users/${id}/bookmarks`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF, les données retournées sont ');
            console.log(response.data);

            store.dispatch(setLoading(false));
            store.dispatch(saveBookmarkedCards(response.data));
          },
        )
        .catch(
          (error) => console.log(`le serveur n'a pas réussi à renvoyer la liste des favoris du user ${id}, il a retourné (error.response)`, error.response),
        );
      next(action);
      break;
    }
    case SIGNUP: {
      const { username, email, password } = store.getState().userCreate;

      console.log('----------------------------------------------------------');
      console.log(`Je prépare les infos suivantes pour m'inscrire (username : ${username}, email: ${email} et password: ${password})`);
      console.log('Route empreintée en POST : /signup (+ username, email, password dans le body)');

      axiosInstance.post(
        '/signup',
        {
          username,
          email,
          password,
        },
      ).then(
        (response) => {
          console.log('Signup REUSSI ! Enregistrement des informations reçues du back (response.data.user)', response.data.user);
          console.log('Le token reçu lors du signup est :', response.data.accessToken);

          store.dispatch(toggleModal());
          store.dispatch(createAccountThankModal());

          store.dispatch(connectUser(response.data.user));
          store.dispatch(resetNewUserFields());
          store.dispatch(toggleLogged());

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors du signup (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case UPDATE_USER_CURRENT: {
      const { id } = store.getState().userCurrent;
      const { email, username, passwordNew: password } = store.getState().userUpdate;

      console.log('----------------------------------------------------------');
      console.log(`Je veux mettre à jour l'user ayant pour id ${id}`);
      console.log(`Route empreintée en PUT : /users/${id} (+ email, username, password dans le body)`);

      axiosInstance.put(
        `/users/${id}`,
        {
          email,
          username,
          password,
        },
      ).then(
        (response) => {
          console.log('Update du user REUSSI, voici les informations reçues du back', response.data.user);
          console.log('Le token reçu lors de l\'update est : ', response.data.accessToken);

          store.dispatch(toggleModal());
          store.dispatch(UpdateAccountSuccessModal());
          store.dispatch(connectUser(email, username));
          store.dispatch(resetUpdateUserFields());
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors de l\'update (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case DELETE_USER_CURRENT: {
      const { id } = store.getState().userCurrent;

      console.log('----------------------------------------------------------');
      console.log(`Je veux supprimer l'user ayant pour id ${id}`);
      console.log(`Route empreintée en DELETE : /users/${id}`);

      axiosInstance.delete(
        `/users/${id}`,
      ).then(
        (response) => {
          console.log('Suppression du user REUSSI', response);
          store.dispatch(toggleModal());
          store.dispatch(deleteUserSuccessModal());
          store.dispatch(userLogout());
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors du delete du user (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case ADD_TO_BOOKMARKS: {
      const { id } = store.getState().userCurrent;

      console.log('----------------------------------------------------------');
      console.log(`je dois AJOUTER la carte ${action.cardId} à l'utilisateur ${id}`);
      console.log(`Route empreintée en POST : /cards/${action.cardId}/bookmarks (+ id du user dans le Body)`);

      axiosInstance.post(
        `/cards/${action.cardId}/bookmarks`,
        {
          id,
        },
      ).then(
        (response) => {
          console.log('Ajout au bookmarks réussi ! Sa nouvelle liste de bookmarks mise à jour est:', response.data);
          store.dispatch(updateBookmarks(response.data));
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors de l\'ajout de bookmark (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case REMOVE_FROM_BOOKMARKS: {
      const { id } = store.getState().userCurrent;

      console.log('----------------------------------------------------------');
      console.log(`je dois RETIRER la carte ${action.cardId} à l'utilisateur ${id}`);
      console.log(`Route empreintée en DELETE : /users/${id}/bookmarks/${action.cardId}`);

      axiosInstance.delete(
        `/users/${id}/bookmarks/${action.cardId}`,
      ).then(
        (response) => {
          console.log('Suppression de la carte des bookmarks réussi ! Sa nouvelle liste de bookmarks mise à jour est: ', response.data);
          store.dispatch(updateBookmarks(response.data));
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors de de la suppression de la carte des bookmarks (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case READ_USER_CURRENT_DATA: {
      const { id } = store.getState().userCurrent;
      axiosInstance.get(
        `/users/${id}`,
      ).then(
        (response) => {
          console.log(`Les données consultées du user ${id} sont`, response.data);
        },
      ).catch(
        (error) => console.log(`Erreur retourné par le serveur en cas de lecture des données du user à l'id ${id}`, error.response),
      );
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
