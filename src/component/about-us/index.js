import './_about-us.scss';
import React from 'react';



class About extends React.Component{

  render(){
    return (
      <section className="hero is-medium is-bold">
        <div className="hero-body"> 
          <div className="container has-text-centered">
            <h1 className="title is-spaced">
                The intelliSoundAI Team
            </h1>
            <h2 className="subtitle">
                Meet the humans behind the machine
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
