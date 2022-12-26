import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import postsRouter from "./routes/posts.js";
import followsRouter from "./routes/follows.js";
import commentRouter from "./routes/comment.js";
import usersRouter from "./routes/users.js";
import cors from "cors";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/follows", followsRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", usersRouter);

app.listen(8800, () => {
  console.log("Server run on port 8800");
});
