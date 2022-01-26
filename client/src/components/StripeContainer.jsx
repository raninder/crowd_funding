import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe('pk_test_51KEQAkFuHWXWbkhY56hpy1rtIS9QG6pMcW2alNQdVid48XmEOiDn4vZ0fslzfjIOjLBVto3mjZmdOuU9QUrIuspF00Vp0AwzLU');
// const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
    
	return (
		<Elements stripe={stripePromise} >
        <CheckoutForm amount={props.amount}/>
      </Elements>
	)
}