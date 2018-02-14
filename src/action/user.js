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

  return superagent.get(`${__API_URL__}${routes.USER_ROUTE}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      console.log(response.body, `is the response from the get on 'user' route`);
      return store.dispatch(setUserAction(response.body));
    });
};

// export const fetchAction = () => (store) => {
//   let {token} = store.getState();
//
//   return superagent.get(`${__API_URL__}${routes.USER_ROUTE}`) //eslint-disable-line
//     .set('Authorization',`Bearer ${token}`)
//     .then(response => {
//       let networkIds = response.body.neuralNetworks;
//       let userNetworks = [];
//       networkIds.map(network => {
//         return superagent.get(userNetworks.push(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${network.id}`)
//           .set(`Authorization`, `Bearer ${token}`)
//         )
//           .then(network => {
//             userNetworks.push(network);
//           });
//       });
//       // set an action with the generated array of networks
//       return store.dispatch(setNetworkAction(response.body.userNetworks));
//     });
// };
