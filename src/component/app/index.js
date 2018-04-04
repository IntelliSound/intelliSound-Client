import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

// david - importing the package to handle GA in react
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';


import StyleGuide from '../style-guide';
import Landing from '../landing';
import Navigation from '../navigation';
import About from '../about-us';

import * as routes from '../../routes';

class App extends React.Component{
<<<<<<< HEAD
=======
  componentDidMount(){
    let token = cookieAction.fetchCookie('X-intelliSoundAi-Token');
    if(token){
      this.props.setTokenAction(token);
    }
    if(this.props.loggedIn){
      this.props.fetchUserNeuralNetworks();
      // .catch(console.error)
    }

    // david - setting up GA with our tracking ID
    ReactGA.initialize('UA-105899470-2');
    
    const history = createHistory();
    history.listen((location, action) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });

  }
>>>>>>> 5b0ce2198d8a5eb7028fc8d9f02418583b629cf3
  
  render(){
    return (
      <div className="app">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <BrowserRouter history={history}>
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
