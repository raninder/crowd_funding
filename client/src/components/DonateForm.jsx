import React, { useState } from "react";
import axios from "axios";
// import CheckoutForm from "./CheckoutForm";
import StripeContainer from "./StripeContainer";
// import CurrencyFormat from "react-currency-format";
export default function Fundraising(props) {
  const [amount, setAmount] = useState("");

  function donate() {
    
    // alert.show('Thanks for Donating');
  }
  function handleReset() {
    setAmount = "";

  }
  // const [showItem, setShowItem] = useState(false);
  return (
    <>
      <section className="main">
        {/* <CurrencyFormat
          id="amount"
          name="donateamount"
          placeholder="Please enter the amount"
          defaultValue={1000}
          thousandSeparator={true}
          prefix={'CA$'}
          decimalsLimit={2}
          onValueChange={(value) => setAmount(value)}
        />; */}
         <form >
          <h3>Donation</h3>
          <label name="amount">Amount</label>
          <input type="text" name="amount" placeholder="500" value={amount} onChange={(event) => setAmount(event.target.value)} />

        </form>
        <div>
        <StripeContainer amount={amount} />
        </div>
        </section>
      
    </>
  );

}