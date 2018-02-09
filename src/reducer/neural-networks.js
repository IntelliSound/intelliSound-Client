const initialState = null;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'NEURAL_NETWORK_SET' :
      return payload;
    default :
      return state;
  }
};
