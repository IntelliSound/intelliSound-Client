const initialState = null;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER_SET' :
      return payload;
    case 'TOKEN_REMOVE' :
      return null;
    default :
      return state;
  }
};
