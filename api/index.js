import express from "express";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("Server run on port 8800");
});
