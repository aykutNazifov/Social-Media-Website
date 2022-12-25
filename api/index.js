import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("test");
});

app.listen(8800, () => {
  console.log("Server run on port 8800");
});
