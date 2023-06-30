require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const cors = require("cors")
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes)
app.use(cors)

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server + Database Running");
  });
});
