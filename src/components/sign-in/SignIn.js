import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

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
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            id='email'
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            id='password'
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <CustomButton>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
