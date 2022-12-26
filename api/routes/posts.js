import express from "express";
import {
  getAllPosts,
  addPost,
  deletePost,
  getUserAllPosts,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:userId", getUserAllPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
