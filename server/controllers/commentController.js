const { User, Status, Comment } = require("../models/index");

// leave comment on status
const commentStatus = async (req, res) => {
  try {
    const comment = await Comment.create({
      commentText: req.body.commentText,
      commentStatusId: req.params.statusId,
      user: req.body.user
    });

    const status = await Status.findByIdAndUpdate(req.params.statusId, {
      $push: { comments: comment._id }
    });

    const user = await User.findByIdAndUpdate(req.body.user, {
      $push: { statusComments: comment._id }
    });

    res.status(200).json({ comment, status, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// get all comments
const getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();

    if (comment.length === 0) {
      res.status(404).json({ message: "No comments found!" });
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      res.status(404).json({ message: "No comment found!" });
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  commentStatus,
  getAllComments,
  getOneComment
};
