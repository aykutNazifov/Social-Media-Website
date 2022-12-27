import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import postsRouter from "./routes/posts.js";
import followsRouter from "./routes/follows.js";
import commentRouter from "./routes/comment.js";
import usersRouter from "./routes/users.js";
import cors from "cors";
import multer from "multer";

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/image", upload.single("image"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/follows", followsRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", usersRouter);

app.listen(8800, () => {
  console.log("Server run on port 8800");
});
