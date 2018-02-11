import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import * as neuralNetworkActions from '../../action/neural-network';
import * as userActions from '../../action/user';

// sound wave files images
import triangleWave from '../../assets/triangle-wave.png';
import squareWave from '../../assets/square-wave.png';
import sineWave from '../../assets/sine-wave.png';
import sawtoothWave from '../../assets/sawtooth-wave.png';
import trumpetIcon from '../../assets/trumpet-icon.png';


import * as FontAwesome from 'react-icons/lib/fa/';


/* Shannon- need to get all of the user's saved networks, then map over the array and make a button for each
*/

let emptyState = {
  redirect: false,
  neuralNetwork: null,
  audioSrc: null,
};

class Network extends React.Component{
  // Shannon- need to bind the functions to 'this' to preserve correct scope
  constructor(props){
    super(props);
    this.state = emptyState;
    this.token = this.props.token;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }

  // Shannon- this will make a post request; switch case based on whether user is logged in or not
  // if not logged in then they should get the option to save their neural net which will redirect them to the login  component
  handleWaveformClick(event){
    event.preventDefault();
    let wavename = event.target.id;
    if(!this.token){
      this.props.loggedOutCreateNeuralNetwork(wavename)
        .then(response => {
          this.setState({neuralNetwork: response.payload.neuralNetworkToSave, audioSrc: response.payload.awsURL});
        });
    }else{
      console.log(this.props.neuralNetwork, `neuralNetwork I want to update`);
      this.props.updateNeuralNetwork(this.props.neuralNetwork, wavename);
    }
  }

  handleNetworkClick(event){
    event.preventDefault();
    let networkId = event.target.id;
    this.props.getNeuralNetwork(networkId)
      .then(neuralNetwork => this.setState({neuralNetwork: neuralNetwork}));
  }


  render(){
    let loggedInView =
      <div>
        <section className="message is-primary">
          <div className="message-body">
            Which network would you like to train? Select one by clicking on the icon below.
          </div>
        </section>

        <div className="columns is-multiline is-mobile">
          {this.props.userNeuralNetworks ? this.props.userNeuralNetworks.map((neuralNetwork, index) => {
            return <div key={index} className="userNeuralNetwork" id={neuralNetwork.networkName}>
              <button onClick={this.handleNetworkClick}></button>
            </div>;
          }) : undefined}
        </div>
      </div>;

    let loggedOutInstructions =
      <div className="message-body">
        Select one of the waveforms below to train a neural network. You will receive an audio file produced by the network after a few minutes.
      </div>;

    let signedInInstructions =
      <div className="message-body">
        Select one of the waveforms below to retrain your network
      </div>;

    let redirectToLogin =
      <Redirect to={{
        pathname:'/login',
        state: {type:'login', network:this.state.neuralnetwork},
      }}/>;

    return(
      <div>
        {this.state.audioSrc ?
          <form>
            <audio
              controls
              src={this.state.audioSrc}
              type='audio/wav'>
            </audio>
            <button onClick={() => this.setState({redirect: true})}>Save network</button>
          </form>
          : undefined}
        {this.state.redirect ? redirectToLogin : undefined}

        <section className="section is-medium network-div">
          {this.token ? loggedInView : undefined}

          <section className="message is-primary">
            {this.token ? signedInInstructions : loggedOutInstructions}
          </section>

          <div className="columns .is-centered is-multiline">

            <div className="column is-one-fifth">
              <button id="org" className="box is-large waveform" onClick={this.handleWaveformClick}><p className="subtitle" id="org">org</p></button>
              <audio
                controls
                src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/org.wav'}
                type='audio/wav'>
              </audio>
            </div>

            <div className="column is-one-fifth">
              <button id="tri" className="box is-large waveform" onClick={this.handleWaveformClick}><p className="subtitle" id="tri">tri</p></button>
              <audio
                controls
                src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/tri.wav'}
                type='audio/wav'>
              </audio>
            </div>

            <div className="column is-one-fifth">
              <button id="sqr" className="box is-large waveform" onClick={this.handleWaveformClick}><p className="subtitle" id="sqr">sqr</p></button>
              <audio
                controls
                src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/sqr.wav'}
                type='audio/wav'>
              </audio>
            </div>

            <div className="column is-one-fifth">
              <button id="saw" className="box is-large waveform" onClick={this.handleWaveformClick}><p className="subtitle" id="saw">saw</p></button>
              <audio
                controls
                src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/saw.wav'}
                type='audio/wav'>
              </audio>
            </div>

            <div className="column is-one-fifth">
              <button id="sin" className="box is-large waveform" onClick={this.handleWaveformClick}><p className="subtitle" id="sin">sin</p></button>
              <audio
                controls
                src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/sin.wav'}
                type='audio/wav'>
              </audio>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  neuralNetwork: state.neuralNetwork,
});

const mapDispatchToProps = (dispatch) => ({
  getNeuralNetwork : (neuralNetworkId) => dispatch(neuralNetworkActions.fetchAction(neuralNetworkId)),
  updateNeuralNetwork: (neuralNetwork, wavename) => dispatch(neuralNetworkActions.updateAction(neuralNetwork, wavename)),
  loggedOutCreateNeuralNetwork : (wavename) => dispatch(neuralNetworkActions.loggedOutCreateAction(wavename)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
