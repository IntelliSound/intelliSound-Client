import {combineReducers} from 'redux';

import token from './tokens';
import user from './users';
import neuralNetwork from './neural-networks';

export default combineReducers({
  token, user, neuralNetwork,
});
