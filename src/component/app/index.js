import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StyleSheet from '../style-sheet';
import Landing from '../landing';
import Navigation from '../navigation';
import AuthForm from '../auth-form';
import * as routes from '../../routes';

// importing font awesome icons
// import FontAwesome from 'font-awesome-webpack';


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
        <Navigation/>
        <BrowserRouter>
          <div>
            <Route path={routes.ROOT_ROUTE} component={Landing} />
            <Route path={routes.LOGIN_ROUTE} component={Landing} />
            <Route path={routes.SIGNUP_ROUTE} component={Landing} />
            <Route path={routes.STYLESHEET_ROUTE} component={StyleSheet} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

const mapStateToProps = dispatch => ({
  fetchUserNeuralNetworks: () => dispatch(neuralNetworks.fetchAction()),
});

export default App;
