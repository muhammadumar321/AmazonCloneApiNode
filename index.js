const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const PORT = 4000;
const app = express();

const dbUrl = "mongodb+srv://muhammadumarch321:4Qn3ImFnoHEDP9DU@cluster0.8usxpxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use(authRouter);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log("connected at port ${PORT}");
});
