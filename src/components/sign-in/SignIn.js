import React, { Component } from 'react'
import './SignIn.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor='password'>Password</label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SignIn
