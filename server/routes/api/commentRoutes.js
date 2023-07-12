const express = require("express");
const router = express.Router();

const { commentStatus, getAllComments, getOneComment } = require("../../controllers/commentController");

router.post("/:statusId", commentStatus);

router.get("/allComments", getAllComments);

router.get("/:id", getOneComment);

module.exports = router;