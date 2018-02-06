import './_auth-form.scss';
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
      <section className="auth-form">
        <form onSubmit = {this.handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required={true}
          />

          {signupRenderedJSX}

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required={true}
          />
          <button type='submit' onClick={this.handleSubmit}> {type} </button>

        </form>
        <a href="#">Google</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </section>
    );
  }
}


handleSignup(user){
    this.props.doSignup(user)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      })
      .catch(console.error);
  }

  const mapDispatchToProps = (dispatch) => ({
  doSignup : (user) => dispatch(authActions.signupAction(user)),
  doLogin : (user) => dispatch(authActions.loginAction(user)),
  fetchClientProfile : () => dispatch(clientProfile.fetchAction()),
});


export default AuthForm;
