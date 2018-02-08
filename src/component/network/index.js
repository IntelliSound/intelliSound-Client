import './_network.scss';
import React from 'react';

class Network extends React.Component{
  render(){
    return(
      <section className="section is-medium network-div">

        <section className="message is-primary">
          <div className="message-body">Instructions Will Go Here</div>
        </section>

        <div className="columns">

          <div className="column">
            <a className="button is-large">
              <div className="media-left">
              </div>
              <div className="media-content">
                <div className="content">
                  <p className="">Network 1</p>
                </div>
              </div>
            </a>
          </div>
          <div className="column">
            <a className="button is-large">
              <div className="media-left">
              </div>
              <div className="media-content">
                <div className="content">
                  <p className="">Network 2</p>
                </div>
              </div>
            </a>
          </div>
          <div className="column">
            <a className="button is-large">
              <div className="media-left">
              </div>
              <div className="media-content">
                <div className="content">
                  <p className="">Network 3</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>
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

export default Network;
