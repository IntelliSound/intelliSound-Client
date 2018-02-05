'use strict';

const {Layer, Network} = require('synaptic');

const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

const LEARNING_RATE = .3;

const predictor = array => {
  for (let i = 0; i < 200000; i++) {
    for (let j = 0; j < array.length - 2; j++){
      myNetwork.activate([array[j], array[j + 1]]);
      myNetwork.propagate(LEARNING_RATE, [array[j + 2]]);
    }
  }
  return myNetwork.activate([array[array.length - 2], array[array.length - 1]]);
};

module.exports = predictor;