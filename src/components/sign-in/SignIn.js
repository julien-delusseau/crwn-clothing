import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils'
import { Container, Title, Buttons } from './SignIn.styles'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error('Fail to sign in!', err.message)
    }
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <Container>
        <Title>I already have an account</Title>
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
          <Buttons>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton isGoogle type='button' onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </Buttons>
        </form>
      </Container>
    )
  }
}

export default SignIn
