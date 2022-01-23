const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
module.exports = (db) => {

router.post("/payment", (req, res) => {
	console.log("hello",req.body)
	let { amount, id } = req.body
	try {
		const payment = stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Donetion part",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})
return router;
}
