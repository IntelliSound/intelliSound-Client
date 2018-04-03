import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import * as neuralNetworkActions from '../../action/neural-network';

// sound wave files images
import triangleWave from '../../assets/triangle-wave.svg';
import squareWave from '../../assets/square-wave.svg';
import sineWave from '../../assets/sine-wave.svg';
import sawtoothWave from '../../assets/sawtooth-wave.svg';
import organWave from '../../assets/organ-wave.svg';


import * as FontAwesome from 'react-icons/lib/fa/';


/* Shannon- need to get all of the user's saved networks, then map over the array and make a button for each
*/

let emptyState = {
  redirect: false,
  neuralNetwork: null,
  audioSrc: null,
  isLoadingData: false,
  selectedOption: 'noise',
  waveQuery: undefined,
};

class Network extends React.Component{
  // Shannon- need to bind the functions to 'this' to preserve correct scope
  constructor(props){
    super(props);
    this.state = emptyState;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
    this.handleSeedClick = this.handleSeedClick.bind(this);
  }

  // Shannon- this will make a post request; switch case based on whether user is logged in or not
  // if not logged in then they should get the option to save their neural net which will redirect them to the login  component
  handleWaveformClick(event){
    event.preventDefault();
    this.setState({isLoadingData: true});
    let wavename = event.target.id;
 
    this.props.loggedOutCreateNeuralNetwork(wavename, this.state.waveQuery)
      .then(response => {
        this.setState({neuralNetwork: response.payload.neuralNetworkToSave, audioSrc: response.payload.awsURL});
      });
  
  }

  handleSeedClick(event){
    if (event.target.value === 'noise'){
      this.setState({waveQuery: undefined, selectedOption: 'noise'});
    } else {
      this.setState({waveQuery: event.target.value, selectedOption: event.target.value});
    }
    console.log(this.state);
  }

  handleNetworkClick(event){
    event.preventDefault();
    let networkId = event.target.id;
    this.props.getNeuralNetwork(networkId)
      .then(neuralNetwork => this.setState({neuralNetwork: neuralNetwork}));
  }

  render(){
    console.log('network state', this.state);
    let loggedInView =
      <div>
        <section className="message is-primary">
          <div className="message-body">
            Which network would you like to train? Select one below.
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
      <div className="message-body subtitle">
        A neural network is a machine learning methodology. It is based off the biological model of neural firing patterns in brains. The model that we are using is called a perceptron, which is a relatively simple neural network. Our model takes an input (a wave file) and analyzes the wave to learn the patterns that exist in the file. Next, it is given a random burst of noise. It is then told to generate output based on the patterns it was trained on and the patterns in the random seed input. <br></br> Select one of the waveforms below to train a neural network. You will receive the output within 30 seconds.
      </div>;

    let signedInInstructions =
      <div className="message-body subtitle">
        Select one of the waveforms below to retrain your network.
      </div>;

    let redirectToLogin =
      <Redirect to={{
        pathname:'/login',
        state: {type:'login', network:this.state.neuralnetwork},
      }}/>;

    return <div>
      <section id="returned-audio" style={this.state.isLoadingData ? {width: '100%'} : {width: '0'}}>
        <form>
          <audio controls src={this.state.audioSrc} type="audio/wav" />
        </form>
      </section>
      {this.state.redirect ? redirectToLogin : undefined}

      <section className="section is-medium network-div">
        {this.props.token ? loggedInView : undefined}

        <section className="message" id="train">
          {this.props.token ? signedInInstructions : loggedOutInstructions}
        </section>

        <div className="columns">
          <form>
            <input type="radio" name="seed" value="noise" id="noise" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'noise'} />
            <label htmlFor="noise" className="radio">
              noise
            </label>
            <input type="radio" name="seed" value="sin" id="sin" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'sin'} />
            <label htmlFor="sin" className="radio">
              sin
            </label>
            <input type="radio" name="seed" value="tri" id="tri" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'tri'} />
            <label htmlFor="tri" className="radio">
              tri
            </label>
            <input type="radio" name="seed" value="sqr" id="sqr" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'sqr'} />
            <label htmlFor="sqr" className="radio">
              sqr
            </label>
            <input type="radio" name="seed" value="saw" id="saw" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'saw'} />
            <label htmlFor="saw" className="radio">
              saw
            </label>
            <input type="radio" name="seed" value="org" id="org" onChange={this.handleSeedClick} checked={this.state.selectedOption === 'org'} />
            <label htmlFor="org" className="radio">
              org
            </label>
          </form>
        </div>

        <div className="columns is-multiline">
          <div className="column is-one-fifth box is-large">
            <div className="box">
              <img src={sineWave} />
            </div>
            <div className="buttons is-centered">
              <a id="sin" className="waveform button is-primary is-outlined" href="#returned-audio" onClick={this.handleWaveformClick}>
                Sine Wave
              </a>
            </div>
            <audio controls src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/sin.wav'} type="audio/wav" />
          </div>

          <div className="column is-one-fifth box is-large">
            <div className="box">
              <img src={triangleWave} />
            </div>
            <div className="buttons is-centered">
              <a id="tri" className="waveform button is-primary is-outlined" href="#returned-audio" onClick={this.handleWaveformClick}>
                Triangle Wave
              </a>
            </div>
            <audio controls src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/tri.wav'} type="audio/wav" />
          </div>

          <div className="column is-one-fifth box is-large">
            <div className="box">
              <img src={squareWave} />
            </div>
            <div className="buttons is-centered">
              <a id="sqr" className="waveform button is-primary is-outlined" href="#returned-audio" onClick={this.handleWaveformClick}>
                Square Wave
              </a>
            </div>
            <audio controls src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/sqr.wav'} type="audio/wav" />
          </div>

          <div className="column is-one-fifth box is-large">
            <div className="box">
              <img src={sawtoothWave} />
            </div>
            <div className="buttons is-centered">
              <a id="saw" className="waveform button is-primary is-outlined" href="#returned-audio" onClick={this.handleWaveformClick}>
                Sawtooth Wave
              </a>
            </div>
            <audio controls src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/saw.wav'} type="audio/wav" />
          </div>

          <div className="column is-one-fifth box is-large">
            <div className="box">
              <img src={organWave} />
            </div>
            <div className="buttons is-centered">
              <a id="org" className="waveform button is-primary is-outlined" href="#returned-audio" onClick={this.handleWaveformClick}>
                Organ Wave
              </a>
            </div>
            <audio controls src={'https://s3.amazonaws.com/intellisoundaibasicwaveforms/org.wav'} type="audio/wav" />
          </div>
        </div>
      </section>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  neuralNetwork: state.neuralNetwork,
});

const mapDispatchToProps = (dispatch) => ({
  getNeuralNetwork : (neuralNetworkId) => dispatch(neuralNetworkActions.fetchAction(neuralNetworkId)),
  updateNeuralNetwork: (neuralNetwork, wavename) => dispatch(neuralNetworkActions.updateAction(neuralNetwork, wavename)),
  loggedOutCreateNeuralNetwork : (wavename, queryString) => dispatch(neuralNetworkActions.loggedOutCreateAction(wavename, queryString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
