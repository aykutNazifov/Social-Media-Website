import express from "express";
import { getAllUsers, getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/:userId", getUser);
router.get("/", getAllUsers);
router.put("/", updateUser);

export default router;
