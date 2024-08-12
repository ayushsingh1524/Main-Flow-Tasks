const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const signUpSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    requried: true,

  },
  phone: {
    type: String,
    required: true,
  },
  dob:{
    type:String,
    required:true
  }
});

signUpSchema.pre('save', async function(next) {
  const user = this;
  // Hash the password only if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(user.password, salt);
    
    // Replace the plain password with the hashed one
    user.password = hashedPassword;
    user.confirmPassword =  hashedPassword
    next();
  } catch (error) {
    next(error);
  }
});
// Create a model from the schema
const SignUp = mongoose.model("SignUp", signUpSchema);

module.exports = SignUp;
