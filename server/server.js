require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");

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

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(routes);
app.use(cors());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("Server + Database Running");
  });
});
