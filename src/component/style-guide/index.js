import './_style-guide.scss';
import React from 'react';

class StyleGuide extends React.Component{
  render(){
    return (
      <div className="StyleSheet">
        <p className="title is-1"> Style Guide
        </p>

        <section className="color-schemes columns">
          <ul>
            <p className="title is-2"> Colors
            </p>
            <li className="color-primary column">Primary Color</li>
            <li className="color-secondary column">Secondary Color</li>
            <li className="color-white column">White Color</li>
            <li className="color-gray column">Gray Color</li>
            <li className="color-dark column">Pseudo-Black Color</li>
          </ul>
        </section>

        <section className="standard-fonts columns">
          <p className="title is-2"> Typography
          </p>
          <h1>h1 Font Style</h1>
          <h2>h2 Font Style</h2>
          <h3>h3 Font Style</h3>
          <h4>h4 Font Style</h4>
          <h5>h5 Font Style</h5>
          <h6>h6 Font Style</h6>

          <p>p Font Style</p>
          <h1>h1 Font Style</h1>
          <h1>h1 Font Style</h1>
          <h1>h1 Font Style</h1>
        </section>

        <section className="buttons">
          <p className="title is-2"> Typography
          </p>
          <section className="small-button">
            <button> Button Primary Small </button>
            <button> Button Secondary Small </button>
            <button> Button Ternary Small </button>
            <button> Button Auxillary Small </button>
          </section>

          <section className="medium-button">
            <button> Button Primary Medium </button>
            <button> Button Secondary Medium </button>
            <button> Button Ternary Medium </button>
            <button> Button Auxillary Medium </button>
          </section>

          <section className="large-button">
            <button> Button Primary Large </button>
            <button> Button Secondary Large </button>
            <button> Button Ternary Large </button>
            <button> Button Auxillary Large </button>
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
