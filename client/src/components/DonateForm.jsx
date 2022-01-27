import React, { useState } from "react";
import axios from "axios";
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
   
        <StripeContainer amount={amount} setAmount={setAmount} />
      </section>
    </>
  );

}