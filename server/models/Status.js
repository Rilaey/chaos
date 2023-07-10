const { Schema, model } = require("mongoose");

const statusSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  createdAt: {
    type: String,
    default: Date,
  }
});

const Status = model('Status', statusSchema)

module.exports = Status;
