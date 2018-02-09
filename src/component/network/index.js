import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import * as neuralNetworkActions from '../../action/neural-network';
import * as userActions from '../../action/user';

/* Shannon- need to get all of the user's saved networks, then map over the array and make a button for each
*/

let emptyState = {
  redirect: false,
  neuralNetwork: null,
  audioSrc: null,
};

// Shannon- need to bind the functions to 'this' to preserve correct scope
class Network extends React.Component{
  componentDidMount(){
    if(this.props.token){
      this.props.getUserNetworks();
    }
  }
  constructor(props){
    super(props);
    this.state = emptyState;
    this.token = this.props.token;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
  }

  //this will make a post request; switch case based on whether user is logged in or not
  // if not logged in then they should get the option to save their neural net
  handleWaveformClick(event){
    event.preventDefault();
    let wavename = event.target.id;
    if(!this.token){
      this.props.loggedOutCreateNeuralNetwork(wavename)
        .then(response => {
          let blob = new Blob(response.payload.neuralGeneratedFile.data);
          let size = blob.size;
          let type = blob.type;
          let reader = new FileReader();
          reader.readAsArrayBuffer(blob);
          reader.addEventListener('loadend', () => {
            let base64FileData = reader.result.toString();
            let mediaFile = {
              fileUrl: null,
              size: size,
              type: type,
              src: base64FileData,
            };
            localStorage.setItem('audioFile', JSON.stringify(mediaFile));
            let reReadItem = JSON.parse(localStorage.getItem('audioFile'));
            this.setState({neuralNetwork: response.payload.neuralNetworkToSave, audioSrc: reReadItem.src});
          });
        });
    }else{
      //put request
    }
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

    let redirectToLogin =
      <Redirect to={{
        pathname:'/login',
        state: {type:'login', network:this.state.neuralnetwork},
      }}/>;

    return(
      <div>
        {console.log(this.state.audioSrc, `the audioSrc`)}
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

        {this.state.audioSrc ? console.log('it worked') : console.log(`it didn't work`)}

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
              <button id="sin" className="button is-large waveform" onClick={this.handleWaveformClick}>Sin</button>
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
  loggedOutCreateNeuralNetwork : (wavename) => dispatch(neuralNetworkActions.loggedOutCreateAction(wavename)),
  getUserNetworks : (user) => dispatch(userActions.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Network);
