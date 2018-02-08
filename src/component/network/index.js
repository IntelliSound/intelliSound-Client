import './_network.scss';
import React from 'react';
import {connect} from 'react-redux';

// make the many buttons for selecting which waveform to train on a template
// make the many buttons for selecting my own network a template

// Shannon- need to bind the functions to 'this' to preserve correct scope
class Network extends React.Component{
  constructor(props){
    super(props);
    this.token = this.props.token;
    this.handleWaveformClick = this.handleWaveformClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
  }

  handleWaveformClick(){
    // console.log('you clicked me');
    // make a request to wave/:waveform
  }

  handleNetworkClick(){
    // grab the name/id of the network selected to attach to PUT request
  }

  render(){
    let loggedInView =
      <div>
        <p>This is a logged in groot</p>
      </div>;

    return(
      <div>
        {this.token ? loggedInView : 'blah'}
        <section className="section is-medium network-div">

          <section className="message is-primary">
            <div className="message-body">Instructions Will Go Here</div>
          </section>

          <div className="columns is-multiline is-mobile">

            <div className="column is-one-quarter waveform">
              <button className="button is-large" onClick={() => {this.handleWaveFormClick();}}>
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
 instructions for using the buttons (<p> tag)
 buttons for making a post request to wave/:waveform that will run a file through the pre-trained networks and return a network & audio file
          1.a) AFTER CLICKING A BUTTON
               modal pops up asking them if they want to save the network they just trained; if so make an account or log in
          1.b) If they do sign up/log in they should be able to name their networks


    2) LOGGED IN
    "Which network would you like to train?"
        they can choose one of the networks by clicking on the network name(?)
    same buttons as for not logged in for selecting which network to train (i.e. what type of waveform we're going to use for the PUT request)
*/

const mapStateToProps = (state) => ({
  token: state.token,
});

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(Network);
