import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()

    this.state={
      loginUsername: '',
      loginEmail: '',
      loginPassword: '',
      SignupUsername: '',
      SignupEmail: '',
      SignupPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin(e){
    e.preventDefault()

    axios.post('http://127.0.0.1:5000/login',{
        username: this.state.loginUsername,
        email: this.state.loginEmail,
        password: this.state.loginPassword
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log('login response', res))
    .catch(err => console.log('login error', err))
  }

  handleSignup(e){
    e.preventDefault()
    
    axios.post('http://127.0.0.1:5000/new-user',{
        username: this.state.signupUsername,
        email: this.state.signupEmail,
        password: this.state.signupPassword
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log('signup response', res))
    .catch(err => console.log('signup error', err))
  }

  render() {
    return (
      <div className='app'>
        <h1>Sign up</h1>

        <form onSubmit={this.handleSignup}>
          <input
            type='text'
            name='signupUsername'
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.signupUsername}
          />
          <input
            type='email'
            name='signupEmail'
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.signupEmail}
          />
          <input
            type='password'
            name='signupPassword'
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.signupPassword}
          />

          <button type='submit'>Submit</button>
        </form>

        <h1>Login</h1>

        <form onSubmit={this.handleLogin}>
          <input
            type='text'
            name='loginUsername'
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.loginUsername}
          />
          <input
            type='email'
            name='loginEmail'
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.loginEmail}
          />
          <input
            type='password'
            name='loginPassword'
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.loginPassword}
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
