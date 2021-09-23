export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, fieldName) => (
  {
    type: CHANGE_FIELD,
    value,
    fieldName,
  }
);

export const SHOW_CONNEXION_MODAL = 'SHOW_CONNEXION_MODAL';
export const showConnexionModal = () => (
  {
    type: SHOW_CONNEXION_MODAL,
  }
);

// export const LOGIN = 'LOGIN';
// export const login = () => (
//   {
//     type: LOGIN,
//   }
// );

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => (
  {
    type: USER_LOGIN,
  }
);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});
