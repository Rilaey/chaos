const { Schema, model } = require("mongoose");

//! get status to link to status array for users

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true
  },
  status: [
    {
      type: Schema.Types.ObjectId,
      ref: "Status"
    }
  ],
});

const User = model("User", userSchema)

module.exports = User;