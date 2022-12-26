import express from "express";
import {
  addComment,
  getComments,
  deleteComment,
} from "../controllers/comment.js";

const router = express.Router();

router.post("/", addComment);
router.get("/:id", getComments);
router.delete("/:id", deleteComment);

export default router;
