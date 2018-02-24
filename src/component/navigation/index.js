import logo from '../../assets/intelliSound-logo.svg';
import './_navigation.scss';
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as routes from '../../routes';
import * as authActions from '../../action/auth';

// david - need to change below anchor tags to Link tags
// import {Landing} from 'react-router-dom';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.token = this.props.token;
    this.state = {
      isToggle: true,
    };
 
    let memberFunctions = Object.getOwnPropertyNames(Navigation.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------
  handleToggleHamNav(event){
    console.log('before state', event.target);
    this.setState({isToggle : !this.state.isToggle });
    console.log('after state', event.target);

    if (this.state.isToggle) {
      console.log('first event', event.target);
      console.log('this.state.isToggle', this.state.isToggle);

      (event.target.className = 'navbar-burger burger is-active',
        document.getElementById('navbar-menu-id').className = 'navbar-menu is-active');
    } else {

      (event.target.className = 'navbar-burger burger',
        document.getElementById('navbar-menu-id').className = 'navbar-menu');
    }
  }


  handleResetHamburger() {
    console.log('reset burgers');
    console.log('before state', this.state);
    this.setState({
      isToggle : false,
    });
    console.log('after state', this.state);
  }


  handleLogout(){
    console.log('handling logout');
    console.log(this.props);
    this.props.userLogout();
    this.props.history.push(routes.ROOT_ROUTE);
  }
  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------


  // on event listener on the burger onClick toggle is-active class on and off
  // also it needs to grab the children from the options ID and append them to the burger menu
  render(){    
    console.log('render on nav', this);
    let logInNavBar =
      <Link to="/login" className="navbar-item has-text-centered">Login</Link>;

    let logOutNavBar =
      <a onClick={this.handleLogout} className="navbar-item has-text-centered">Log Out</a>;

    let handleLoginVsLogout = (this.props.token) ? logOutNavBar : logInNavBar;

    return (
      <section className="navigation schoger-border is-transparent">
        <nav className="navbar is-white">

          <div className="navbar-brand" >
            <Link to='/' className="navbar-item">
              <img src={logo} alt="intelliSound Logo"  height="60"/>
            </Link>

            <div className="navbar-burger burger is-white"
              data-target= "Options" onClick={(event) => this.handleToggleHamNav(event)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-menu" id='navbar-menu-id'>
            <div className="navbar-start"></div>

            <div className="navbar-end" id="Options">
              <Link to="/" className="navbar-item has-text-centered" onClick= {this.handleResetHamburger}>Home</Link>
              {handleLoginVsLogout}
              <Link to="/about" className="navbar-item has-text-centered" onClick={this.handleResetHamburger}>About Us</Link>
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

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(authActions.logoutAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
