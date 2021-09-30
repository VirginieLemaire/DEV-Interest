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
