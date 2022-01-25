import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe('pk_test_51KEQAkFuHWXWbkhY56hpy1rtIS9QG6pMcW2alNQdVid48XmEOiDn4vZ0fslzfjIOjLBVto3mjZmdOuU9QUrIuspF00Vp0AwzLU');
// const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: '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',
    //   };
    
	return (
		<Elements stripe={stripePromise} >
        <CheckoutForm amount={props.amount}/>
      </Elements>
	)
}
// export default StripeContainer;