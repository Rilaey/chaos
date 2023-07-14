const express = require("express");
const router = express.Router();

const { commentStatus, getAllComments, getOneComment } = require("../../controllers/commentController");

router.post("/createComment/:id", commentStatus);

router.get("/allComments/:id", getAllComments);

router.get("/oneComment/:id", getOneComment);

module.exports = router;