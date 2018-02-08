import superagent from 'superagent';
import * as routes from '../routes';

export const setNetworkAction = (neuralNetwork) => ({
  type : 'NEURAL_NETWORK_SET',
  payload : neuralNetwork,
});


export const fetchUserAction = (neuralNetworkID) => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetworkID}`)
    .set('Authorization',`Bearer ${token}`)
    // .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const loggedOutCreateAction = (wavename) => {
  console.log(`groot`);
  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}${routes.WAVE_ROUTE}/${wavename}`)
    .then(response => console.log(response, `is the response`));
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

  return superagent.put(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/${neuralNetwork._id}`)
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(neuralNetwork)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.NEURAL_NETWORK_ROUTE}/me`)
    .set('Authorization',`Bearer ${token}`)
    .then(response => {
      return store.dispatch(setNetworkAction(response.body));
    });
};
