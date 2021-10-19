export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const changeNewUserField = (value, fieldName) => (
  {
    type: CHANGE_NEW_USER_FIELD,
    value,
    fieldName,
  }
);

export const RESET_NEW_USER_FIELDS = 'RESET_NEW_USER_FIELDS';
export const resetNewUserFields = () => (
  {
    type: RESET_NEW_USER_FIELDS,
  }
);

export const SIGNUP = 'SIGNUP';
export const signup = () => (
  {
    type: SIGNUP,
  }
);

export const VERIFY_USERNAME = 'VERIFY_USERNAME';
export const verifyUsername = (username) => (
  {
    type: VERIFY_USERNAME,
    username,
  }
)

export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const verifyEmail = (email) => (
  {
    type: VERIFY_EMAIL,
    email,
  }
)

export const SET_AVAIL = 'SET_AVAIL';
export const setAvail = (value, fieldName) => (
  {
    type: SET_AVAIL,
    value,
    fieldName,
  }
);

export const PASSWORD_MATCH = 'PASSWORD_MATCH';
export const passwordMatch = (value) => (
  {
    type: PASSWORD_MATCH,
    value,
  }
);
