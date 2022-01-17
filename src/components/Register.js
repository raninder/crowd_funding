import React, { useState } from "react";
export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [stAddress, setStAdress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  //reset form data 
  const reset = () => {
    // setStudent("");
    setError("");
   
  }
  //cancel function set onCancel event
  const Cancel = () => {
    reset();
    props.onCancel();
  }
  //check validation for textbox
  function validate() {
    // if (student === "") {
    //   setError("Student name cannot be blank");
    //   return;
    // }
    // if (interviewer === null) {
    //   setError("Interviewer cannot be unselected");
    //   return;
    // }
    // setError("");
    props.onSave(email, password,firstName,lastName,phone,stAddress,city,state,postalCode);
  }
  //create form 
  return (
    <main className="">
      <section className="">
        <form onSubmit={event => event.preventDefault()}>
        <label name="Email">Email</label>
          <input className="" name="email" type="email" value={email}
            onChange={(event) => setEmail(event.target.value)}
          /><br/>
          <label name="Password">Password</label>
          <input className="" name="Password" type="password" value={password}
            onChange={(event) => setPassword(event.target.value)}
          /><br/>
          <label name="First Name">First Name</label>
          <input className="" name="firstName" type="firstName" value={firstName}
            onChange={(event) => setFirstname(event.target.value)}
          /><br/>
          <label name="Last Name">Last Name</label>
          <input className="" name="lastName" type="lastName" value={lastName}
            onChange={(event) => setLastname(event.target.value)}
          /><br/>
          <label name="Phone">Phone number</label>
          <input className="" name="phone" type="phone" value={phone}
            onChange={(event) => setPhone(event.target.value)}
          /><br/>
          <label name="St_Address">St_Address</label>
          <input className="" name="stAddress" type="stAddress" value={stAddress}
            onChange={(event) => setStAdress(event.target.value)}
          /><br/>
          <label name="city">City</label>
          <input className="" name="city" type="city" value={city}
            onChange={(event) => setCity(event.target.value)}
          /><br/>
          <label name="State">State</label>
          <input className="" name="state" type="state" value={state}
            onChange={(event) => setState(event.target.value)}
          /><br/>
          <label name="Postal code">Postal code</label>
          <input className="" name="postalCode" type="postalCode" value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
          /><br/>
          <section className="">{error}</section>
         
        </form>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <button  onClick={Cancel}>Cancel</button>
          <button  onClick={validate}>Save</button>
        </section>
      </section>
    </main>
  );
}