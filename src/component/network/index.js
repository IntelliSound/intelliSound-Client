import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as neuralNetworkActions from '../../action/neural-network';
import * as userActions from '../../action/user';

/* Shannon- need to get all of the user's saved networks, then map over the array and make a button for each
*/

// Shannon- need to bind the functions to 'this' to preserve correct scope
class Network extends React.Component{
  componentDidMount(){
    if(this.props.token){
      this.props.getUserNetworks();
    }
  }
  constructor(props){
    super(props);
    this.token = this.props.token;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }

  handleWaveformClick(event){
    let waveformName = event.target.id;
    // make a request to wave/:waveform
  }

  handleNetworkClick(event){
    // grab the name/id of the network selected to attach to PUT request
    let neuralNetworkId = event.target._id;
  }

  render(){
    let loggedInView =
      <div>
        <section className="message is-primary">
          <div className="message-body">
            Which network would you like to train? Select one by clicking on the icon below?
          </div>
        </section>

        <div className="columns is-multiline is-mobile">

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

    return(
      <div>
        <section className="section is-medium network-div">
          {this.token ? loggedInView : undefined}

          <section className="message is-primary">
            {this.token ? signedInInstructions : loggedOutInstructions}
          </section>

          <div className="columns is-multiline is-mobile">

            <div className="column is-one-fifth">
              <button id="trumpet" className="button is-large waveform" onClick={this.handleWaveformClick}> Trumpet </button>
            </div>

            <div className="column is-one-fifth">
              <button id="tri" className="button is-large waveform" onClick={this.handleWaveformClick}>Tri</button>
            </div>

            <div className="column is-one-fifth">
              <button id="sqr" className="button is-large waveform" onClick={this.handleWaveformClick}>SQR</button>
            </div>

            <div className="column is-one-fifth">
              <button id="saw" className="button is-large waveform" onClick={this.handleWaveformClick}>Saw</button>
            </div>

            <div className="column is-one-fifth">
              <button id="complex" className="button is-large waveform" onClick={this.handleWaveformClick}>Complex</button>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

/* 1) NOT LOGGED IN
 buttons for making a post request to wave/:waveform that will run a file through the pre-trained networks and return a network & audio file
          1.a) AFTER CLICKING A BUTTON
               modal pops up asking them if they want to save the network they just trained; if so make an account or log in
          1.b) If they do sign up/log in they should be able to name their networks
*/

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  updateNeuralNetwork: (neuralNetwork) => dispatch(neuralNetworkActions.updateAction(neuralNetwork)),
  createNeuralNetwork : (neuralNetwork) => dispatch(neuralNetworkActions.createAction(neuralNetwork)),
  getUserNetworks : (user) => dispatch(userActions.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
