import superagent from 'superagent';
import * as routes from '../routes';
import {deleteCookie} from '../lib/cookie';

export const setTokenAction = (token) => ({
  type : 'TOKEN_SET',
  payload : token,
});

export const removeTokenAction = () => ({
  type : 'TOKEN_REMOVE',
});



export const signupAction = (user) => (store) => {
  console.log('user signup:', user);
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(response => {
      return store.dispatch(setTokenAction(response.body.token));
    });
};

export const loginAction = (user) => (store) => {
  console.log('user login', user);
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      console.log(response, `response in auth action`);
      return store.dispatch(setTokenAction(response.body.token));
    });
};

export const logoutAction = () => (store) => {
  console.log('user logout');
  deleteCookie('X-intelliSoundAi-Token');
  return store.dispatch(removeTokenAction);
};
