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

export const createAccountAndSaveNetwork = (neuralNetwork) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/save/${neuralNetwork}`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      console.log(`I ran with: `, response);
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const loggedOutCreateAction = (wavename) => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}${routes.WAVE_ROUTE}/${wavename}`) //eslint-disable-line
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    }
    );
};

export const createAction = (neuralNetwork) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${WAVENAME}`) 
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const updateAction = (neuralNetwork) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetwork._id}`)//eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/me`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};
