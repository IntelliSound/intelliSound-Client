import superagent from 'superagent';
import * as routes from '../routes';

export const setUserAction = (user) => ({
  type : 'USER_SET',
  payload : user,
});


export const createAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.USER_ROUTE}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setUserAction(response.body));
    });
};

export const updateAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}${routes.USER_ROUTE}/${user._id}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setUserAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.USER_ROUTE}/me`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      //should return the entire user
      console.log(response, `is the response from the 'get/me' route`);
      return store.dispatch(setUserAction(response.body));
    });
};
