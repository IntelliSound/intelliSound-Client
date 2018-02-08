import './_auth-form.scss';
import LogoSVG from '../../assets/intelliSound-logo.svg';
import React from 'react';
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
