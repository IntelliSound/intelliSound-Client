import superagent from 'superagent';
import * as routes from '../routes';

export const setUserAction = (user) => ({
  type : 'USER_SET',
  payload : user,
});


export const createAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.USER_ROUTE}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setUserAction(response.body));
    });
};

export const updateAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}${routes.USER_ROUTE}/${user._id}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setUserAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.USER_ROUTE}/me`)
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setUserAction(response.body));
    });
};
