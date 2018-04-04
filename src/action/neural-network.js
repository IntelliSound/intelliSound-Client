import superagent from 'superagent';
import * as routes from '../routes';

export const setNetworkAction = (neuralNetwork) => ({
  type : 'NEURAL_NETWORK_SET',
  payload : neuralNetwork,
});

// export const fetchUserAction = (neuralNetworkID) => (store) => {
//   let {token} = store.getState();
//
//   return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetworkID}`)
//     .set('Authorization',`Bearer ${token}`)
//     // .set('Content-Type','application/json')
//     .send(neuralNetwork)
//     .then(response => {
//       return store.dispatch(setNetworkAction(response.body));
//     });
// };

export const saveNetwork = (neuralNetwork, networkName) => (store) => {
  let {token} = store.getState();
  console.log(neuralNetwork, `is the neuralNetwork in saveNetwork`);
  // Shannon- we are only sending back a 200 status, so we don't dispatch to the store after making the POST request
  return superagent.post(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/save/${networkName}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      console.log(response.status);
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const loggedOutCreateAction = (wavename, queryParam = undefined) => (store) => {
  let {token} = store.getState();
  if (queryParam) {
    wavename += `?seed=${queryParam}`;
  }
  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}${routes.WAVE_ROUTE}/${wavename}`) //eslint-disable-line
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const createAction = (neuralNetwork, wavename) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${wavename}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const updateAction = (neuralNetwork, wavename) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetwork._id}/${wavename}`)//eslint-disable-line

    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const fetchAction = (neuralNetworkId) => (store) => {
  let {token} = store.getState();
  console.log(neuralNetworkId, `is the network id, and I ran`);

  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetworkId}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};
