import * as cookie from '../lib/cookie';
let token = cookie.fetchCookie('X-intelliSoundAi-Token');
// console.log(token, `is the token in the token reducer`);
let initialState = token ? token : null;

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
