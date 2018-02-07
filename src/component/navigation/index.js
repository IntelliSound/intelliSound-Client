import './_navigation.scss';
import React from 'react';

// david - need to change below anchor tags to Link tags
// import {Landing} from 'react-router-dom';


class Navigation extends React.Component{

  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------


  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------

  render(){
    return (
      <section className="navigation">
        <nav className="navbar is-white">

          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src='../../assets/intelliSound-logo.svg' alt="intelliSound Logo" width="112" height="28"/>
            </a>

            <div className="navbar-burger burger" data-target="Options">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
            </div>
            <div className="navbar-end" id="Options">
              <a className="navbar-item" href="/">Home</a> 
              <a className="navbar-item" href="/login">Login</a> 
              <a className="navbar-item" href="/home">About Us</a>
            </div>
          </div>
          
          <div className="navbar-item">
          </div>
          
        </nav>
      </section>);
  }
}

export default Navigation;
