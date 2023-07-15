const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true
  },
  commentCreator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: String,
    default: Date
  }
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;