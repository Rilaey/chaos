const express = require("express");
const router = express.Router();
// const requireAuth = require("../../middleware/requireAuth");

// // // require auth for all status routes
// router.use(requireAuth)

const {
  getAllStatus,
  getStatusById,
  createStatus,
  likeStatus,
  commentStatus
} = require("../../controllers/statusController");

router.get("/allStatus", getAllStatus);

router.get("/singleStatus/:id", getStatusById);

router.post("/createStatus", createStatus);

router.put("/likeStatus/:id", likeStatus);

router.post("/commentStatus/:id", commentStatus);

module.exports = router;
