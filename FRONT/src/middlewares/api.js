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
  NextPage, saveCardsMiniSearch, saveCardsSearch, saveMoreCards, setCurrentSearch,
} from '../action/cardsSearch';
import {
  addCardThankModal,
  createAccountThankModal,
  deleteCardSuccessModal,
  deleteUserSuccessModal,
  setAppLoading, setLoading, setMore, setMoreHome, toggleModal,
  updateAccountSuccessModal, updateCardSuccessModal,
} from '../action/displayOptions';

import {
  DELETE_USER_CURRENT, UPDATE_USER_CURRENT, resetUpdateUserFields,
} from '../action/userUpdate';

import {
  connectUser, LOGIN, resetConnectingFields, SET_ACCESSTOKEN_LOCALSTORAGE,
} from '../action/userConnect';
import { resetNewUserFields, SIGNUP } from '../action/userCreate';
import {
  ADD_TO_BOOKMARKS, FETCH_CONTRIBUTIONS, saveContributions,
  FETCH_BOOKMARKED_CARDS, READ_USER_CURRENT_DATA, REMOVE_FROM_BOOKMARKS,
  saveBookmarkedCards, toggleLogged, userLogout,
  updateBookmarks, DELETE_CONTRIBUTION, fetchContributions, USER_API_LOGOUT, userApiLogout, GET_USER_WITH_TOKEN, getUserWithToken,
} from '../action/userCurrent';
import { slugify } from '../selectors/cards';
import { capitalizeFirstLetter, getDomainName } from '../selectors/utils';
import {
  autofillUpdateFields, DELETE_CARD, GET_UPDATE_CARD_INFO, UPDATE_CARD,
} from '../action/cardUpdate';
import { FETCH_CARD, saveCard } from '../action/cardCurrent';

const axiosInstance = axios.create({
  baseURL: 'https://devinterest.herokuapp.com/',
});

let refreshToken = localStorage.getItem('refreshToken');

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
      const {
        searchQuery,
      } = store.getState().cardsSearch;
      // console.log('----------------------------------------------------------');
      // console.log(`Je demande au serveur de me retourner les cartes pour la MINI recherche de la searchbard avec les mots-clés: ${searchQuery}`);
      // console.log(`Route empreintée en GET : /cards/search?keyword=${searchQuery}&page=${1}&size=${3}`);

      axiosInstance
        .get(`/cards/search?keyword=${searchQuery}&tech=all&category=all&level=all&type=all&lang=all&page=${1}&size=${3}`)
        .then(
          (response) => {
            // console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
            // console.log(response.data);
            // console.log('response cardsMini du serveur ', response);
            store.dispatch(saveCardsMiniSearch(response.data.data, response.data.count));
          },
        )
        .catch(
          (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données pour la mini search :', error.response),
        );
      next(action);
      break;
    }
    case FETCH_CARDS_SEARCH: {
      const {
        currentSearch, size, techFilter, categoryFilter,
        levelFilter, typeFilter, langFilter,
      } = store.getState().cardsSearch;
      store.dispatch(setMore(true));
      store.dispatch(setLoading(true));
      const firstPage = 1;

      console.log('----------------------------------------------------------');
      console.log(`Je demande au serveur de me retourner les cartes pour la recherche avec les mots-clés: ${action.keywords}`);
      console.log(`Route empreintée en GET : /cards/search?keyword=${action.keywords}&page=${firstPage}&size=${size}`);

      if (action.keywords) {
        axiosInstance
          .get(`/cards/search?keyword=${action.keywords}&tech=${action.tech}&category=${action.category}&level=${action.level}&type=${action.typeF}&lang=${action.lang}&page=${firstPage}&size=${size}`)
          .then(
            (response) => {
              console.log('Retour du serveur POSITIF et me retourne les données suivantes :');
              console.log(response.data);
              store.dispatch(setCurrentSearch(action.keywords));
              store.dispatch(saveCardsSearch(response.data.data, response.data.count));
              store.dispatch(NextPage());
              store.dispatch(changeSearchField('', 'search'));
              store.dispatch(setLoading(false));
            },
          )
          .catch(
            (error) => console.log('ERREUR : Le serveur n\'a pas réussi à retourner de données :', error.response),
          );
        next(action);
        break;
      }
      else if (!action.keywords) {
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
      const {
        page, currentSearch, size, techFilter, categoryFilter, levelFilter, typeFilter, langFilter,
      } = store.getState().cardsSearch;

      console.log('----------------------------------------------------------');
      console.log(`En scrollant en bas de la page, je demande au serveur de me retourner les cartes pour la recherche avec les mots-clés: ${currentSearch}`);
      console.log(`Route empreintée en GET : /cards/search?keyword=${currentSearch}&tech=${techFilter}&category=${categoryFilter}&level=${levelFilter}&type=${typeFilter}&lang=${langFilter}&page=${page}&size=${size}`);

      axiosInstance
        .get(`/cards/search?keyword=${currentSearch}&tech=${techFilter}&category=${categoryFilter}&level=${levelFilter}&type=${typeFilter}&lang=${langFilter}&page=${page}&size=${size}`)
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
      store.dispatch(toggleModal());

      axiosInstance.post(
        '/cards/save',
        {
          ...newCard,
        },
      ).then(
        (response) => {
          console.log('L\'enregistrement de la carte a REUSSI ! et les informations ont bien été récupérées par le FRONT', response);

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
          console.log('Le serveur me donne aussi le refreshToken suivant lors du login (response.data.refreshToken) :', response.data.refreshToken);

          localStorage.setItem('userToken', response.data.accessToken);
          localStorage.setItem('userRefreshToken', response.data.refreshToken);

          console.log('valeur de UserToken du LS ', localStorage.getItem('userToken'));
          console.log('valeur de serToken du LS ', localStorage.getItem('userRefreshToken'));

          store.dispatch(connectUser(response.data.user));
          store.dispatch(resetConnectingFields());
          store.dispatch(toggleLogged());

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
          refreshToken = response.data.refreshToken;
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
          (error) => {
            console.log(`le serveur n'a pas réussi à renvoyer la liste des favoris du user ${id}, il a retourné (error.response)`, error.response);
          },
        );
      next(action);
      break;
    }
    case FETCH_CONTRIBUTIONS: {
      store.dispatch(setLoading(true));
      const { id } = store.getState().userCurrent;
      console.log('----------------------------------------------------------');

      console.log(`Je demande au serveur de me retourner les contributions du user ${id}`);
      console.log('Route empreintée en GET : /contributor/cards');

      axiosInstance
        .get('/contributor/cards')
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF, les données retournées sont ');
            console.log(response.data);
            store.dispatch(setLoading(false));
            store.dispatch(saveContributions(response.data));
            // console.log(response.data.data);
          },
        );
      next(action);
      break;
    }
    case DELETE_CONTRIBUTION: {
      console.log('----------------------------------------------------------');
      console.log(`Je veux supprimer la carte ayant pour id ${action.cardId}`);
      console.log(`Route empreintée en DELETE : /cards/${action.cardId}/users`);

      axiosInstance.delete(
        `/cards/${action.cardId}/users`,
      ).then(
        (response) => {
          console.log('Suppression de la carte', response);
          store.dispatch(fetchContributions());
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors du delete de la carte (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case SIGNUP: {
      const { username, email, password } = store.getState().userCreate;

      console.log('----------------------------------------------------------');
      console.log(`Je prépare les infos suivantes pour m'inscrire (username : ${username}, email: ${email} et password: ${password})`);
      console.log('Route empreintée en POST : /signup (+ username, email, password dans le body)');
      store.dispatch(toggleModal());

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

          localStorage.setItem('userToken', response.data.accessToken);
          localStorage.setItem('userRefreshToken', response.data.refreshToken);

          store.dispatch(createAccountThankModal());

          store.dispatch(connectUser(response.data.user));
          store.dispatch(resetNewUserFields());
          store.dispatch(toggleLogged());

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
          refreshToken = response.data.refreshToken;
        },
      ).catch(
        (error) => console.log('ERREUR serveur lors du signup (error.response): ', error.response),
      );
      next(action);
      break;
    }
    case UPDATE_USER_CURRENT: {
      const { id, email: emailCurrent, username: usernameCurrent } = store.getState().userCurrent;
      const {
        email: emailNew, username: usernameNew, passwordNew, passwordCurrent,
      } = store.getState().userUpdate;

      const username = !usernameNew ? usernameCurrent : usernameNew;
      const email = !emailNew ? emailCurrent : emailNew;
      const password = !passwordNew ? passwordCurrent : passwordNew;

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
          console.log('Update du user REUSSI, voici les informations reçues du back', response.data);
          console.log('Le token reçu lors de l\'update est : ', response.data.accessToken);

          store.dispatch(toggleModal());
          store.dispatch(updateAccountSuccessModal());
          store.dispatch(connectUser(response.data));
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

      store.dispatch(toggleModal());

      axiosInstance.delete(
        `/users/${id}`,
      ).then(
        (response) => {
          console.log('Suppression du user REUSSI', response);
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
    case GET_UPDATE_CARD_INFO: {
      console.log('----------------------------------------------------------');
      console.log('je demande à récupérer les infos de la carte pour les réinjecter dans update card:', action.id);
      console.log(`Route empreintée en GET : /cards/${action.id}`);

      axiosInstance.get(
        `/cards/details/${action.id}`,
      ).then(
        (response) => {
          console.log(`REUSSI, les informations reçues de la carte ${action.id} sont`, response.data);
          store.dispatch(autofillUpdateFields(response.data));
        },
      ).catch(
        (error) => console.log(`ERREUR serveur lors de la lecture d\'une carte sur la route /cards/${action.id} (error.response): `, error.response),
      );
      next(action);
      break;
    }
    case UPDATE_CARD: {
      const userId = store.getState().userCurrent.id;

      const {
        id, title, slug, website, description, url, image, level, lang, type, category, techs,
      } = store.getState().cardUpdate;

      const updateCard = {
        title: title,
        slug: slug,
        website: website,
        description: description,
        url_image: image,
        url: url,
        user_id: userId,
        level_id: level,
        language_id: lang,
        type_id: type,
        category_id: category,
        techs: techs,
      };

      console.log('----------------------------------------------------------');
      console.log('je souhaite mettre à jour les données d\'une carte avec les infos suivantes: ', updateCard);
      console.log(`Route empreintée en PUT : /contributor/cards/${id}`);

      axiosInstance.put(
        `/contributor/cards/${id}`,
        {
          ...updateCard,
        },
      ).then(
        (response) => {
          console.log('REUSSI, la carte a bien été mise à jour ! :', response.data);
          store.dispatch(toggleModal());
          store.dispatch(updateCardSuccessModal());
        },
      ).catch(
        (error) => {
          console.log('ERREUR la carte n\'a pas pu être mise à jour: ', error.response);
          alert('ca n\'a pas marché');
        },
      );
      next(action);
      break;
    }

    case DELETE_CARD: {
      // const userId = store.getState().userCurrent.id;
      const { deleteCardId } = store.getState().cardUpdate;
      console.log('----------------------------------------------------------');
      console.log('je souhaite supprimer la carte suivantes: ', deleteCardId);
      console.log(`Route empreintée en DELETE : /cards/${deleteCardId}/users`);

      axiosInstance.delete(
        `/cards/${deleteCardId}/users`,
      ).then(
        (response) => {
          console.log('REUSSI, la carte a bien été supprimée ! :', response.data);
          store.dispatch(deleteCardSuccessModal());
        },
      ).catch(
        (error) => {
          console.log('ERREUR la carte n\'a pas pu être supprimée: ', error.response);
          // store.dispatch(updateCardSuccessModal());
        },
      );
      next(action);
      break;
    }
    case SET_ACCESSTOKEN_LOCALSTORAGE: {
      const accessToken = localStorage.getItem('userToken');
      const localStorageRefreshToken = localStorage.getItem('userRefreshToken');
      console.log('accessToken LocalStorage ', accessToken);
      console.log('refreshToken LocalStorage ', localStorageRefreshToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      refreshToken = localStorageRefreshToken;
      next(action);
      break;
    }
    case USER_API_LOGOUT: {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userRefreshToken');
      store.dispatch(userLogout());
      next(action);
      break;
    }
    case GET_USER_WITH_TOKEN: {
      // console.log('je rentre bien dans get user with token');
      const accessTokenLS = localStorage.getItem('userToken');
      // console.log('je récupère l\'accessToken du LS', accessTokenLS);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessTokenLS}`;
      // console.log('j\'empreinte la route /user');
      axiosInstance.get('/user')
        .then((response) => {
          // console.log('Réussite sur la route /user je reçois les infos :', response);
          store.dispatch(toggleLogged());
          store.dispatch(connectUser(response.data.user));
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          // console.log('je me connecte avec ces informations', response.data);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            // console.log('j\'ai bien un retour 401');
            const refreshTokenLS = localStorage.getItem('userRefreshToken');
            // console.log('Je met dans le header le refreshToken ', refreshToken);
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${refreshTokenLS}`;
            axiosInstance.post('/api/refreshToken')
              .then((rs) => {
                // eslint-disable-next-line max-len
                // console.log('reussite api/refreshToken ', rs.data);
                axiosInstance.defaults.headers.common.Authorization = `Bearer ${rs.data.accessToken}`;
                // console.log('j\'ai bien reçu un nouveau accessToken car celui que j\'avais n\'étais plus bon', rs.data.accessToken);
                // console.log('je relance la route /user');
                axiosInstance.get('/user')
                  .then((res) => {
                    // console.log('Réussite sur la route 2 /user je reçois les infos :', res);
                    store.dispatch(toggleLogged());
                    store.dispatch(connectUser(res.data.user));
                    localStorage.setItem('accessToken', res.data.accessToken);
                    localStorage.setItem('refreshToken', res.data.refreshToken);
                    // console.log('je me connecte avec ces informations', res.data);
                  })
                  .catch((er) => console.log('je suis dans l\'erreur du 2ieme /user', er));
                // localStorage.setItem('accessToken', response.data.accessToken);
                // localStorage.setItem('refreshToken', response.data.refreshToken);
                // store.dispat  h(toggleLogged());
                // store.dispatch(connectUser(response.data.user));
                // Rediriger vers la page ou on souhaitait aller à l'origine
              })
              .catch((err) => {
                console.log('je suis dans l\'erreur de la route /refreshtoken');
                // rediriger vers la page de login
                store.dispatch(userApiLogout());
                console.log(err);
              });
          }
        });
      next(action);
      break;
    }
    case FETCH_CARD: {
      store.dispatch(setLoading(true));

      console.log('----------------------------------------------------------');

      console.log(`Je demande au serveur de me retourner la carte avec l'${action.id} et le slug ${action.slug}`);
      console.log(`Route empreintée en GET : /cards/${action.slug}/${action.id}`);

      axiosInstance
        .get(`/cards/${action.slug}/${action.id}`)
        .then(
          (response) => {
            console.log('Retour du serveur POSITIF, les données retournées sont ');
            console.log(response.data);
            store.dispatch(saveCard(response.data));
            store.dispatch(setLoading(false));
          },
        ).catch(
          (error) => {
            console.log('ERREUR la carte n\'a pas pu être récupérée: ', error.response);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
