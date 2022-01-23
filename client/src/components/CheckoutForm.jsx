import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function CheckoutForm(props) {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [userid, setId] = useState("");
	useEffect(() => {
		setId(localStorage.getItem("userID"));
	}, []);
   
console.log('userid',userid);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                console.log("id", id)
                const response = await axios.post("http://localhost:3001/api/pays/payment", {
                    amount: props.amount,
                    id
                })


                console.log("Successful payment", response.data)

                if (response.data) {
                    axios.post("http://localhost:3001/api/funds/addnewdonation", {amount:props.amount,userid})
                        .then(res => {
                            console.log(res);
                        });
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    return (
        <>

            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement />
                        </div>
                    </fieldset>
                    <button>Donate</button>
                </form>
                :
                <div>
                    <h2>You just Donate money. this is the best decision of you're life</h2>
                </div>
            }


        </>
    )
};
