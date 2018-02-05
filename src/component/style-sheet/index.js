import './_style-sheet.scss';
import React from 'react';

class StyleSheet extends React.Component{
  render(){
    return (
      <div className="StyleSheet">
        <section className="color-schemes">
          <ul>
            <li className="color-primary">primary</li>
            <li className="color-secondary">secondary</li>
            <li className="color-tertiarty">tertiarty</li>
            <li className="color-auxillary">auxillary</li>
          </ul>
        </section>

        <section className="standard-fonts">
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

export default StyleSheet;
