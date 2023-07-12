const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true
  },
  commentStatusId: {
    type: Schema.Types.ObjectId,
    ref: "Status"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;