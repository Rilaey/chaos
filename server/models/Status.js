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
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Status = model('Status', statusSchema)

module.exports = Status;
