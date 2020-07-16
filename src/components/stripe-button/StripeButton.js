import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const PUBLIC_KEY =
    'pk_test_51H5W0DH5X3VhhmYl1Lj53QmyfTDC601Nx4bJzrmc9vw5JKn1FxKSlHxCgywx0Ok0rUwez2trVMQp1YEfV90PB6zf00iLHgssWM'
  const onToken = token => {
    console.log(token)
    alert('Payment Successfull')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='CRWN Clothing'
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      currency='EUR'
      billingAddress
      shippingAddress
      allowRememberMe
      token={onToken}
      stripeKey={PUBLIC_KEY}
    />
  )
}

export default StripeButton
