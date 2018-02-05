import './_landing.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import WaveUploader from '../wave-uploader';

import StyleSheet from '../style-sheet';

class Landing extends React.Component{
  render(){
    return (
      <div className="app">
      
        <h2>Landing</h2>

        <WaveUploader/>
        
      </div>);
  }
}

export default Landing;
