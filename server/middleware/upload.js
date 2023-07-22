const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

// const Storage = multer.diskStorage({
//   destination: "uploads",
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   }
// });

// const upload = multer({
//   storage: Storage,
// }).single(uuidv4())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
