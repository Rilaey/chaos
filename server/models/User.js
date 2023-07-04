const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
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
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
    ]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
