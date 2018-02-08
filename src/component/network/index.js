import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as neuralNetworkActions from '../../action/neural-network';
import * as userActions from '../../action/user';

// make the many buttons for selecting which waveform to train on a template
// make the many buttons for selecting my own network a template

/* need to get all of the user's saved networks, then map over the array and make a button for each

myNetwork buttons
<div className="column is-one-quarter">
  <button className="button is-large myNetwork" onClick={() => {this.handleWaveFormClick();}}>
    <div className="media-content">
      <div className="content">
        <p className="networkName">{{networkName}}</p>
      </div>
    </div>
  </button>
</div>
*/

/* Original
<div className="column is-one-quarter">
  <button className="button is-large myNetwork" onClick={() => {this.handleWaveFormClick();}}>
    <div className="media-content">
      <div className="content">
        <p className="">Network 1</p>
      </div>
    </div>
  </button>
</div>
*/

// Shannon- need to bind the functions to 'this' to preserve correct scope
class Network extends React.Component{
  componentDidMount(){
    if(this.props.loggedIn){
      this.props.getUserNetworks();
    }
  }
  constructor(props){
    super(props);
    console.log(this.token, `this.token`);
    console.log(this.props.token, `this.props.token`);
    this.token = this.props.token;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }

  handleWaveformClick(event){
    event.preventDefault();
    // console.log('you clicked me');
    // make a request to wave/:waveform
  }

  handleNetworkClick(event){
    event.preventDefault();
    // grab the name/id of the network selected to attach to PUT request
    let neuralNetworkId = event.target._id;
  }

  render(){
    console.log(this.token, `is the token`);
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

    // {this.token ? loggedInView : undefined}
    return(
      <div>
        <section className="section is-medium network-div">
          {loggedInView}

          <section className="message is-primary">
            {this.token ? signedInInstructions : loggedOutInstructions}
          </section>

          <div className="columns is-multiline is-mobile">

            <div className="column is-one-quarter">
              <button className="button is-large waveform" onClick={() => {this.handleWaveFormClick();}}>
                <div className="media-content">
                  <div className="content">
                    <p className="">Network 1</p>
                  </div>
                </div>
              </button>
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

export default connect(mapStateToProps)(Network);
