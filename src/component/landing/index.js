import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../routes';

//========================================
// Components and Actions
//========================================
import WaveUploader from '../wave-uploader';
import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';
import * as userActions from '../../action/user';
import StyleSheet from '../style-sheet';

//========================================
// Magic Strings
//========================================
const SWITCH_TO_LOGIN_MESSAGE = 'Already a User?';
const SWITCH_TO_SIGNUP_MESSAGE = 'Make a new Account';


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

    let {location} = this.props;

    let defaultJSX =
        <WaveUploader/>;

    let signupJSX =
        <AuthForm
          type={'signup'}
          handleComplete={this.handleSignup}
          authMessage={SWITCH_TO_LOGIN_MESSAGE}
          authLink={routes.LOGIN_ROUTE}/>;

    let loginJSX =
      <AuthForm
        type={'login'}
        handleComplete={this.handleLogin}
        authMessage={SWITCH_TO_SIGNUP_MESSAGE}
        authLink={routes.SIGNUP_ROUTE}/>;

    console.log('location.pathname :', location.pathname);
    return(
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? defaultJSX : undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signupJSX : undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined}
      </div>
    );
  }
}

const mapStateToProps = state => ({token : state.token});

const mapDispatchToProps = dispatch => ({
  handleSignup : (user) => dispatch(authActions.signupAction(user)),
  handleLogin : (user) => dispatch(authActions.loginAction(user)),
  fetchUserNeuralNetworks : () => dispatch(userActions.fetchAction()),
});
export default connect(mapStateToProps,mapDispatchToProps)(Landing);
