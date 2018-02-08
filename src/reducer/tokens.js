import * as cookie from '../lib/cookie';
let initialState = token ? token : null;
let token = cookie.fetchCookie('X-intelliSoundAI-Token');

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'TOKEN_SET' :
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default :
      return state;
  }
};
