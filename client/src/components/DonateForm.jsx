import React, { useState } from "react";
import axios from "axios";
// import CheckoutForm from "./CheckoutForm";
import StripeContainer from "./StripeContainer";
export default function Fundraising(props) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // alert.show('Thanks for Donating');
  }
  function handleReset() {
    setAmount = "";

  }
  // const [showItem, setShowItem] = useState(false);
  return (
    <>
      <section className="main">
        <form onSubmit={handleSubmit} >
          <h3>Donation</h3>
          <label name="amount">Amount</label>
          <input type="text" name="amount" placeholder="500" value={amount} onChange={(event) => setAmount(event.target.value)} />

        </form>
      </section>

      {amount ? (
        <StripeContainer amount={amount} />
      ) : (
        <>

          <button onClick={() => setAmount({ amount })}>Donation</button>
        </>
      )}
    </>
  );

}