const User = require("../repository/models/User");

const createUser = async (req, res) => {
  try {
    //logic to skip if user already exists!
    const { username } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists!",
        body: {
          existingUser,
        },
      });
    }
    const newUser = new User({ username });
    const savedUser = await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User created successfully!",
      body: {
        savedUser,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `${err}`,
    });
  }
};

const getAllUsers = (req, res) => {};

const getOneUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
};
