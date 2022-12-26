import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";

export const getFollows = (req, res) => {
  const q = "SELECT followedId FROM follows WHERE followerId = ?";

  db.query(q, [req.query.followedId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const addFollow = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(409).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userId) => {
    if (err) return res.status(409).json("Token is not valid!");

    const q = "INSERT INTO follows (`followedId`, `followerId`) VALUES (?)";

    const values = [req.body.followedId, userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("You follow succesfully!");
    });
  });
};

export const deleteFollow = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(409).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userId) => {
    if (err) return res.status(409).json("Token is not valid!");

    const q = "DELETE FROM follows WHERE followedId = ? AND followerId = ?";

    const values = [req.body.followedId, userId];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("You unfollow succesfully!");
    });
  });
};
