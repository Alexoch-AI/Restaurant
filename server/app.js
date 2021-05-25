require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");

const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Express started`);
  connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => {
      console.log("mongoStarted", PORT);
    }
    );
  });
  