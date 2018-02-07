import './_auth-form.scss';
import LogoSVG from '../../assets/intelliSound-logo.svg';
import React from 'react';

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
      name = 'email'
      placeholder = 'email'
      type = 'email'
      value = {this.state.email}
      onChange = {this.handleChange}
    />;

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;


    return(
      <div className="layout-default">
        <section className="hero is-fullheight is-medium is-bold auth-form">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <article className="card is-rounded">
                  <div className="card-content">
                    <form onSubmit = {this.handleSubmit}>

                      <img className="is-centered" src={LogoSVG} alt="logo" width="200"/>

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
                        className="input"
                        autoFocus=""
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required={true}
                      />
                      <button className="button is-primary is-fullwidth is-block" type='submit' onClick={this.handleSubmit}> {type} </button>

                    </form>
                    <div className="columns">
                      <a className="column" href="#">Google</a>
                      <a className="column" href="#">Facebook</a>
                      <a className="column" href="#">Twitter</a>
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
