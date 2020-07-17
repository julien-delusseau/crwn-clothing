import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import { Container } from './SignInAndUpPage.styles'

const SignInAndUpPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  )
}

export default SignInAndUpPage
