import logo from '../../assets/intelliSound-logo.svg';
import './_navigation.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// david - need to change below anchor tags to Link tags
// import {Landing} from 'react-router-dom';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.token = this.props.token;
    this.state = {
      isToggle: false,
    };
    this.handleToggleHamNav = this.handleToggleHamNav.bind(this);
  }

  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------
  handleToggleHamNav(event){
    this.setState({isToggle : !this.state.isToggle });
    
    (this.state.isToggle) ? (event.target.className = 'navbar-burger burger is-active', 
      document.getElementById('navbar-menu-id').className = 'navbar-menu is-active') : (event.target.className = 'navbar-burger burger',  
      document.getElementById('navbar-menu-id').className = 'navbar-menu');

  
  }
  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------
  componentDidMount(){
    this.handleToggleHamNav(event);
  }
  // on event listener on the burger onClick toggle is-active class on and off
  // also it needs to grab the children from the options ID and append them to the burger menu
  render(){
    console.log(this.token, `is the token in navigation`);
    
    let logInNavBar =
      <Link to="/login" className="navbar-item has-text-centered">Login</Link>;

    let logOutNavBar =
      <Link to="/logout" className="navbar-item has-text-centered">Log out</Link>;

    let handleLoginVsLogout = (this.state.token) ? logOutNavBar : logInNavBar;



    return (
      <section className="navigation schoger-border  is-transparent">
        <nav className="navbar is-white">

          <div className="navbar-brand" >
            <Link to='/' className="navbar-item">
              <img src={logo} alt="intelliSound Logo"  height="60"/>
            </Link>

            <div className="navbar-burger burger is-white"
              data-target= "Options"
              onClick={this.handleToggleHamNav} >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-menu" id='navbar-menu-id'>
            <div className="navbar-start"></div>

            <div className="navbar-end" id="Options">
              <Link to="/" className="navbar-item has-text-centered">Home</Link>
              {handleLoginVsLogout}
              <Link to="/about" className="navbar-item has-text-centered">About Us</Link>

            </div>
          </div>

          <div className="navbar-item"></div>

        </nav>
      </section>);
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(Navigation);
