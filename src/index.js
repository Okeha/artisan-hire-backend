const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRouter = require("./controller/user.controller");
const artisanRouter = require("./controller/artisan.controller");
const paymentRouter = require("./controller/payment.controller");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/artisans", artisanRouter);
app.use("/api/v1/payments", paymentRouter);
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
