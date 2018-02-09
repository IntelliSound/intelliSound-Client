import './_about-us.scss';
import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';

// importing headshots for below
import andrewPic from '../../assets/andrew-headshot.jpg';
import nicholasPic from '../../assets/Nicholas-headshot.jpg';
import davidPic from '../../assets/david-headshot.jpg';
import jacobPic from '../../assets/jacob-headshot.jpg';
import shannonPic from '../../assets/shannon-headshot.jpg';


class About extends React.Component{

  render(){
    return (
      <div>
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
                    <p className="subtitle is-6">"Backend Magician"</p>
                  </div>
                </div>

                <div className="content team-member-bio">
                I am a full stack JavaScript developer with a passion for creativity in all forms. I am driven by finding novel solutions to difficult problems, using whatever tools I have at my disposal.
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
                    <p className="subtitle is-6">"Makes Backend dreams come true"</p>
                  </div>
                </div>

                <div className="content team-member-bio">
                Javascript developer with strong mathematics background; experience managing and de-escalating team stress during difficult situations. I excel at mitigating risk and managing teams. 
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
                  <img className="headshots" src={shannonPic} alt="Shannon Dillion Headshot"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content has-text-centered">
                    <p className="title is-3">Shannon Dillon</p>
                    <p className="subtitle is-6">"React rules my world"</p>
                  </div>
                </div>

                <div className="content team-member-bio">
                Full-stack JavaScript developer hoping to make an impact on the world utilizing the power of technology. I started simply building websites to cheer up friends. 

                </div>
                <footer className="card-footer">
                  <a href="https://www.linkedin.com/in/shannon-e-dillon/" target="blank" className="card-footer-item"><FontAwesome.FaLinkedin color='$color-primary'/></a>
                  <a href="https://github.com/sedillon93" target="blank" className="card-footer-item"><FontAwesome.FaGithub color='$color-primary'/></a>
                </footer>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-image is-rounded">
                <figure className="image is-4by4 level">
                  <img className="headshots level-item has-text-centered" src={jacobPic} alt="Jacob Evans Headshot"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content has-text-centered">
                    <p className="title is-3">Jacob Evans</p>
                    <p className="subtitle is-6">"Resident Machine Learning Human"</p>
                  </div>
                </div>

                <div className="content team-member-bio">
                As a Developer, I am an ambitious individual that will seek opportunities that will foster my growth and experience as a software engineer to continue to expand my knowledge and skill base in the software engineering field.

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
                    <p className="subtitle is-6">Jack of All Things CSS</p>
                  </div>
                </div>

                <div className="content team-member-bio">
                Front end developer, schooled in the MERN Full Stack stack, who loves crafting intuitive digital products and compelling user experiences that surprise and delight end users.


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
