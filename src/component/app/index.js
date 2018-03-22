import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import StyleGuide from '../style-guide';
import Landing from '../landing';
import Navigation from '../navigation';
import About from '../about-us';

import * as routes from '../../routes';

class App extends React.Component{
  
  render(){
    return (
      <div className="app">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <BrowserRouter>
          <div>
            <Navigation/>
            <Route exact path={routes.ROOT_ROUTE} component={Landing} />
           
            <Route path={routes.ABOUT_ROUTE} component={Landing} />
            <Route path={routes.STYLEGUIDE_ROUTE} component={StyleGuide} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

export default App;
