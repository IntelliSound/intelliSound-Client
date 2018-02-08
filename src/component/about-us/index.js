import './_about-us.scss';
import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';

// importing headshots for below
import andrewPic from '../../assets/andrew-headshot.jpg';
import nicholasPic from '../../assets/Nicholas-headshot.jpg';
import davidPic from '../../assets/david-headshot.jpg';




class About extends React.Component{

  render(){
    return (
      <div>
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
      
        <div className="columns">

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4">
                  <img className="headshots" src={andrewPic} alt="Andrew Bloom headshot"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  
                  <div className="media-content has-text-centered">
                    <p className="title is-3">Andrew Bloom</p>
                    <p className="subtitle is-5">@johnsmith</p>
                  </div>
                </div>
      
                <div className="content team-member-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                 
                </div>
                <footer className="card-footer">
                  <a href="https://github.com/ALB37" target="blank" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                  <a href="https://linkedin.com/in/alb37/" target="blank" className="card-footer-item"><FontAwesome.FaLinkedin color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4">
                  <img className="headshots" src={nicholasPic} alt="Nicholas headshot"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  
                  <div className="media-content has-text-centered">
                    <p className="title is-3">Nicholas Carnignan</p>
                    <p className="subtitle is-5">@johnsmith</p>
                  </div>
                </div>
      
                <div className="content team-member-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                 
                </div>
                <footer className="card-footer">
                  <a href="https://www.linkedin.com/in/nicholascarignan/" target="blank" className="card-footer-item"><FontAwesome.FaLinkedin color='$color-primary'/></a>
                  <a href="https://github.com/ncarignan" target="blank" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4">
                  <img className="headshots" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  
                  <div className="media-content has-text-centered">
                    <p className="title is-3">Shannon Dillon</p>
                    <p className="subtitle is-5">@johnsmith</p>
                  </div>
                </div>
      
                <div className="content team-member-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                 
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                  <a href="#" className="card-footer-item"><FontAwesome.FaTwitter color='$color-primary'/></a>
                  <a href="#" className="card-footer-item"><FontAwesome.FaInstagram color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4 level">
                  <img className="headshots level-item has-text-centered" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  
                  <div className="media-content has-text-centered">
                    <p className="title is-3">Jacob Evans</p>
                    <p className="subtitle is-5">@johnsmith</p>
                  </div>
                </div>
      
                <div className="content team-member-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                 
                </div>
                <footer className="card-footer">
                  <a href="https://www.linkedin.com/in/jacob-m-g-evans/" target="blank" className="card-footer-item"><FontAwesome.FaLinkedin color='$color-primary'/></a>
                  <a href="https://github.com/Cloud887" target="blank" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                  <a href="https://twitter.com/Cloud887" target="blank" className="card-footer-item"><FontAwesome.FaTwitter color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4">
                  <img className="headshots is-centered" src={davidPic} alt="David Lindahl Headshot"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  
                  <div className="media-content has-text-centered">
                    <p className="title is-3">David Lindahl</p>
                    <p className="subtitle is-5">@johnsmith</p>
                  </div>
                </div>
      
                <div className="content team-member-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                 
                </div>
                <footer className="card-footer">
                  <a href="https://www.linkedin.com/in/davidalindahl/" target="blank" className="card-footer-item"><FontAwesome.FaLinkedin color='$color-primary'/></a>
                  <a href="https://github.com/austriker27" target="blank" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                  <a href="https://twitter.com/austriker27" target="blank" className="card-footer-item"><FontAwesome.FaTwitter color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          

        </div>
      </div>

    );
  }
}

export default About;
