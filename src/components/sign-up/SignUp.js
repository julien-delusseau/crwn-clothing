import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'
import { Container, Title } from './SignUp.styles'

export class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    const { displayName, email, password, confirmPassword } = this.state
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error("Can't create a new user!", err.message)
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <Container>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>sign up</CustomButton>
        </form>
      </Container>
    )
  }
}

export default SignUp
