import React from 'react'
import './SignInAndUpPage.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInAndUpPage = () => {
  return (
    <div className='signin-signup'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndUpPage
