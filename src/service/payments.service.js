const path = require("path");
const axios = require("axios");
require("dotenv").config(path.join(__dirname, "./../../.env"));

const completePayment = async (req, res) => {
  const { paymentId, transactionId } = req.body;

  data = { txid: transactionId };

  try {
    const response = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      data,
      {
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      res.json({
        success: true,
        message: "Payment approved successfully",
        body: response.data,
      });
    } else {
      return res.status(response.status).json({
        success: false,
        message: "Payment approval failed",
      });
    }
    // handle the response if needed
  } catch (error) {
    console.error("Error approving payment:", error);

    return res.status(500).json({
      success: false,
      message: "Payment approval failed",
    });
  }

  //To-Do
  //handle updating data base after successful payment completion
};

const approvePayment = async (req, res) => {
  const { paymentId } = req.body;

  try {
    const response = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {},
      {
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`,
        },
      }
    );

    // console.log(response);
    if (response.status === 200) {
      res.json({
        success: true,
        message: "Payment approved successfully",
        body: response.data,
      });
    } else {
      return res.status(response.status).json({
        success: false,
        message: "Payment approval failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Payment approval failed",
    });
  }
};
module.exports = {
  completePayment,
  approvePayment,
};
