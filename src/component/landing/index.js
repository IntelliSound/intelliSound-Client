import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../routes';
import Particles from 'react-particles-js';

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
    
    let heroBannerJSX = 
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
        </section>;

    let defaultJSX =
        <div className="landing">
          {heroBannerJSX}
          <WaveUploader/>;
        </div>;

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
        <Particles 
          params={{
            
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#0A2239',
              },
              shape: {
                stroke: {
                  width: 0,
                  color: '#0A2239',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 80,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: '#0A2239',
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 12,
                random: false,
                straight: false,
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: true,
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }
          }

          style={{
            width: '100%',
          }}
        />

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
