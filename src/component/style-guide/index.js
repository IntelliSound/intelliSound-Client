import './_style-guide.scss';
import React from 'react';

class StyleGuide extends React.Component{
  render(){
    return (
      <div className="StyleSheet">
        <p className="title is-1"> Style Guide
        </p>

        <p className="title is-2"> 
          Colors
        </p>
          
        <section className="color-schemes columns">

          <div className="column">
            <span className="colorCircles color-primary">
            </span>
            <p className="title is-5 has-text-centered">Primary Color
            </p>
          </div>

          <div className="column">
            <span className="colorCircles color-secondary"></span>
            <p className="title is-5 has-text-centered">Secondary Color</p>
          </div>

          <div className="column">
            <span className="colorCircles color-white"></span>
            <p className="title is-5 has-text-centered">White Color</p>
          </div>

          <div className="column">
            <span className="colorCircles color-gray"></span>
            <p className="title is-5 has-text-centered">Gray Color</p>
          </div>

          <div className="column">
            <span className="colorCircles color-dark"></span>
            <p className="title is-5 has-text-centered">Pseudo Black</p>
          </div>

        </section>


        <p className="title is-2">Typography
        </p>

        <section className="standard-fonts columns">
          <div className="column">
            <p className="serif is-size-3 has-text-centered">Title Font: Playfair Display</p>
          </div>

          <div className="column">
            <p className="sans-serif is-size-3 has-text-centered">Body Font: Muli</p>
          </div>
          
        </section>

        <p className="title is-2"> Buttons
        </p>

        <section className="buttons">
          

          <section className="medium-button columns">
            <button className="button is-primary is-medium column"> Primary Medium </button>
            <button className="button is-medium column"> Secondary Medium </button>
            
          </section>

          <section className="large-button columns">
            <button className="button is-primary is-large column">Primary Large </button>
            <button className="button is-large column">  Secondary Large </button>
            
          </section>
        </section>

        <section className="forms">
        </section>

        <section className="feedback-messages">
        </section>
      </div>);
  }
}

export default StyleGuide;
