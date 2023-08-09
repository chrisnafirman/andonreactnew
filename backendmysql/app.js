const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const router = require("./routers/router");
const sequelize = require("./models/init"); // Update the import path

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 3001;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Test the database connection before starting the server
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database.");
    startServer();
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
