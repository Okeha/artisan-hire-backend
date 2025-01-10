const userRouter = require("express").Router();
const { createUser, getAllUsers } = require("./../service/user.service");

userRouter.post("/", createUser);

userRouter.get("/", getAllUsers);

module.exports = userRouter;
