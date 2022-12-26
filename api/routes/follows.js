import express from "express";
import { getFollows, addFollow, deleteFollow } from "../controllers/follows.js";

const router = express.Router();

router.get("/", getFollows);
router.post("/", addFollow);
router.delete("/", deleteFollow);

export default router;
