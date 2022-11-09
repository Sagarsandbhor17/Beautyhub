const express = require("express");
const dbConnect = require("../config/db");
const cors = require("cors");
const user = require("../Router/user.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", user);

app.listen(8080, async () => {
  await dbConnect();
  console.log("Started at: http://localhost:8080");
});
