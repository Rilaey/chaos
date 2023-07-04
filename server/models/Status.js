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
}, {
  timestamps: true
});

const Status = model('Status', statusSchema)

module.exports = Status;
