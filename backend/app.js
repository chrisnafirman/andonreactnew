const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

const app = express();
const router = require("./routers/router");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

const startServer = () => {
  app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
  });
};

if (cluster.isMaster) {
  // Create only one worker.
  cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Fork a new worker if a worker dies
    cluster.fork();
  });
} else {
  startServer();
}
