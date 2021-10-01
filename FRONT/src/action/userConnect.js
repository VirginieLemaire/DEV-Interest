export const CHANGE_CONNECTING_USER_FIELD = 'CHANGE_CONNECTING_USER_FIELD';
export const changeConnectingUserField = (value, fieldName) => (
  {
    type: CHANGE_CONNECTING_USER_FIELD,
    value,
    fieldName,
  }
);

export const LOGIN = 'LOGIN';
export const login = () => (
  {
    type: LOGIN,
  }
);

export const RESET_CONNECTING_FIELDS = 'RESET_CONNECTING_FIELDS';
export const resetConnectingFields = () => (
  {
    type: RESET_CONNECTING_FIELDS,
  }
);

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (data) => (
  {
    type: CONNECT_USER,
    data,
  }
);
