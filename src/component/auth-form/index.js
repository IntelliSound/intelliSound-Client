import './_auth-form.scss';
import LogoSVG from '../../assets/intelliSound-logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';


let emptyState = {
  username: '',
  email: '',
  password: '',
};

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;

    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(emptyState);
  }


  render() {
    let {type} = this.props;
    type = type === 'login' ? type : 'signup';

    let signupJSX =
    <input
      className="input"
      name = 'email'
      placeholder = 'email'
      type = 'email'
      value = {this.state.email}
      onChange = {this.handleChange}
    />;

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;

    let redirectString = (process.env.NODE_ENV === 'debug') ? 'http://localhost:3000' : 'https://intellisoundai.com';

    let clientID = `1009680303973-ctmukkrculf9p3e4i3gr4e54558tjfbr.apps.googleusercontent.com`;

    let googleOauthLink = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/oauth/google&scope=openid%20email%20profile&client_id=${clientID}&prompt=consent&response_type=code`;

    let signupOnMessageLogInJSX = 
    <div>
      <span className="tag">Dont have an account?</span> <span><Link className="tag" to="/signup">Sign up</Link></span>
    </div>;

    let signupOnLogInJSX = (type === 'login') ? signupOnMessageLogInJSX : undefined;

    return(
      <div className="layout-default">
        <section className="hero is-fullheight is-medium is-bold auth-parent-container">
          <div className="hero-body auth-container">
            <div className="container has-text-centered">
              <div className="column is-half is-offset-one-quarter">
                <article className="card is-rounded container auth-form-container">
                  <div className="card-content auth-form levels">
                    <form onSubmit = {this.handleSubmit}>

                      <img className="is-centered form-logo level" src={LogoSVG} alt="logo" width="200"/>

                      
                      <p className="subtitle">
                        Welcome back!
                      </p>
                    

                      <input
                        className="input"
                        autoFocus=""
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required={true}
                      />

                      {signupRenderedJSX}

                      <input
                        className="input level"
                        autoFocus=""
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required={true}
                      />
                      <button className="button is-primary is-fullwidth is-block subtitle" type='submit' onClick={this.handleSubmit}> {type} </button>

                    </form>
                    <h2 className="subtitle">
                      or use:
                    </h2>

                    <div className="columns is-mobile">
                      <a className="column" href="#"><FontAwesome.FaGoogle size={30} color='$color-primary'/></a>

                      <a className="column" href="#"><FontAwesome.FaFacebook size={30} color='$color-primary'/></a>
                      <a className="column" href="#"><FontAwesome.FaTwitter size={30} color='$color-primary'/></a>
                    </div>

                    {signupOnLogInJSX}

                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AuthForm;
