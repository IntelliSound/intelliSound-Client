import './_landing.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import WaveUploader from '../wave-uploader';

import StyleSheet from '../style-sheet';

class Landing extends React.Component{
  render(){
    return (
      <div className="landing">

        <section className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
              Train a Neural Network using a WAV file
              </h1>
              <h2 className="subtitle">
              Experience the raw power of machine learning
              </h2>
            </div>
          </div>
        </section>
      </div>);
  }
}

export default Landing;
