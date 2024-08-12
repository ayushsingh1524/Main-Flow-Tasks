const express = require("express");
const router = express.Router();
const Signup = require("../Database/signup-schema");
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
  res.status(200).json({ message: "This is home page" });
});

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword, phone, dob } = req.body;
    console.log("username: ", username);
    console.log("Confirm Password:", confirmPassword);
    const newUser = new Signup({
      username,
      email,
      password,
      confirmPassword,
      phone,
      dob,
    });

    if (password == confirmPassword) {
      await newUser.save();
    } else {
      res.status(400).json({ message: "Passwords donot match!" });
    }
    res.status(200).json({ message: "Data stored in database!" });
  } catch (error) {
    res.status(400).json({ error: "Error occured view in console" });
    console.log("Error in signup page: ", error);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await Signup.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password,user.password);
      console.log(isPasswordValid)
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      // If email and password are correct
      return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
