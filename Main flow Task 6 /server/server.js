const express = require("express");
const app = express();
const cors = require('cors')
const router = require("./Routes/router");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./Database/db-connection");

const corsOptions = {
  origin: "http://localhost:3000",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true
}
app.use(express.json());
app.use(cors(corsOptions))
app.use("/api", router);

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
});
