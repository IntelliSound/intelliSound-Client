import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import StyleSheet from '../style-sheet';
import Landing from '../landing';
import Navigation from '../navigation';
import AuthForm from '../auth-form';
import About from '../about-us';

import * as routes from '../../routes';
import * as neuralNetworkActions from '../../action/neural-network';

class App extends React.Component{
  componentDidMount(){
    if(this.props.loggedIn){
      // this.props.fetchUserNeuralNetworks()
      // .catch(console.error)

    }
  }
  render(){
    return (
      <div className="app">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <BrowserRouter>
          <div>
            <Navigation/>
            <Route exact path={routes.ROOT_ROUTE} component={Landing} />
            <Route path={routes.LOGIN_ROUTE} component={Landing} />
            <Route path={routes.SIGNUP_ROUTE} component={Landing} />
            <Route path={routes.ABOUT_ROUTE} component={Landing} />
            <Route path={routes.STYLESHEET_ROUTE} component={StyleSheet} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchUserNeuralNetworks: () => dispatch(neuralNetworkActions.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
