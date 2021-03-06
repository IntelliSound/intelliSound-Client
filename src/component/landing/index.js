import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../routes';
import Particles from 'react-particles-js';

//========================================
// Components and Actions
//========================================

import About from '../about-us';
import Network from '../network';
import * as neuralNetworkActions from '../../action/neural-network';
import StyleSheet from '../style-guide';

//========================================
// Magic Strings
//========================================


class Landing extends React.Component{
  // Shannon- grab all of the user's neural networks if they are logged in so we can populate the buttons with the network names
  constructor(props){
    super(props);
    this.userNeuralNetworks = null;

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  render(){
    let {location} = this.props;

    let heroBannerJSX =
        <section className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-spaced">
                Train A Neural Network From Scratch
              </h1>
              <h2 className="subtitle">
                Experience the raw power of machine learning
              </h2>
              <a className="button is-primary is-outlined tryBtn" href="#train">Try it out</a>
            </div>
          </div>
        </section>;

    let aboutUsJSX =
        <section className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-spaced">
                  The intelliSoundAI Team
              </h1>
              <h2 className="subtitle">
                  Meet the humans behind the machine
              </h2>
            </div>
          </div>
        </section>;

    let BannerJSX = null;
    if(location.pathname === routes.ROOT_ROUTE){
      BannerJSX = heroBannerJSX;
    }else if(location.pathname === routes.ABOUT_ROUTE){
      BannerJSX = aboutUsJSX;
    }

    let defaultJSX =
        <div>
          <Network userNeuralNetworks={this.userNeuralNetworks}/>
        </div>;

    let particlesAnimationJSX =

      <Particles
        params={{

          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#9E9E9E',
            },
            shape: {
              stroke: {
                width: 0,
                color: '#9E9E9E',
              },
              circle: {
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
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: '#9E9E9E',
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3,
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
                distance: 200,
                duration: 0.2,
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
      />;


    return(
      <div className="landing">

        {particlesAnimationJSX}
        <div className="banner-jsx">{BannerJSX}</div>

        {location.pathname === routes.ROOT_ROUTE ? defaultJSX : undefined}
        {location.pathname === routes.ABOUT_ROUTE ? <About/> : undefined}

      </div>
    );


  }
}

const mapStateToProps = state => ({
  neuralNetwork: state.neuralNetwork,
});

const mapDispatchToProps = dispatch => ({
  fetchNeuralNetworks : (neuralNetId) => dispatch(neuralNetworkActions.fetchAction(neuralNetId)),
  saveNetwork: (network, networkName) =>  dispatch(neuralNetworkActions.saveNetwork(network, networkName)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Landing);
