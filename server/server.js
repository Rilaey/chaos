require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");
const { User } = require("./models/index");
const upload = require("./middleware/upload");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
  })
);

// app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(routes);
app.use(cors());

// profile image route
app.post('/upload/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send('Invalid user ID');
    }

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update the profile picture filename in the user document
    user.profilePicture = req.file.filename;
    await user.save();

    res.send('Profile picture uploaded successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server + Database Running");
  });
});
