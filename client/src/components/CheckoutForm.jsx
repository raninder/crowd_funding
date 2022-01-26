import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function CheckoutForm(props) {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [userid, setId] = useState("");
    const [fundid, setfundId] = useState("");
	useEffect(() => {
		setId(localStorage.getItem("userID"));
        setfundId(localStorage.getItem("fundID"))
	}, []);
   
console.log('userid',userid);
console.log('fundid',fundid)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(props.amount);
        if(props.amount == 0 || props.amount.value == "0"){
            alert("Plese enter donation amount!");
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                console.log("id", id)
                const response = await axios.post("http://localhost:3001/api/pays/payment", {
                    amount: props.amount.value,
                    id
                })


                console.log("Successful payment", response.data)

                if (response.data) {
                    axios.post("http://localhost:3001/api/funds/addnewdonation", {amount:props.amount.value,userid,fundid})
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
                    <h2>You donation has been processed! Thank you! </h2>
                    <h3>Go back to <a href='/Homepage'>Homepage</a> or keep viewing <a href='/DonateMoney'>other campaigns</a></h3>
                </div>
            }


        </>
    )
};
