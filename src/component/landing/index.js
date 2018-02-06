import './_landing.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as routes from '../../routes';

import WaveUploader from '../wave-uploader';
import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';


import StyleSheet from '../style-sheet';

class Landing extends React.Component{
  constructor(props){
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleLogin(user){
    this.props.handleLogin(user)
      .then(() => {
        // this.props.fetchUserNeuralNetworks(); //Nicholas this may be needed to render nets
        this.props.history.push(routes.PROFILE_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user){
    this.props.handleSignup(user)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      })
      .catch(console.error);
  }

  render(){
    return (
      <div className="landing">

        <h2>Landing</h2>

        <WaveUploader/>

      </div>);
  }
}

const mapStateToProps = state => ({token : state.token});

const mapDispatchToProps = (dispatch) => ({
  doSignup : (user) => dispatch(authActions.signupAction(user)),
  doLogin : (user) => dispatch(authActions.loginAction(user)),
  fetchClientProfile : () => dispatch(clientProfile.fetchAction()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Landing);


componentWillMount check for token
