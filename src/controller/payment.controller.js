const {
  approvePayment,
  completePayment,
} = require("./../service/payments.service");
const paymentRouter = require("express").Router();

paymentRouter.post("/approve-payment/", approvePayment);
paymentRouter.post("/complete-payment/", completePayment);
module.exports = paymentRouter;
