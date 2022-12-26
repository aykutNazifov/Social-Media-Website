import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const addComment = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(409).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userId) => {
    if (err) return res.status(500).json(err);

    const q =
      "INSERT INTO comments (`comment`,`createdAt`, `commentPostId`, `commentUserId`) VALUES (?)";

    const values = [
      req.body.comment,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.postId,
      userId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).josn(500);

      res.status(200).json("Comment has been added!");
    });
  });
};

export const getComments = (req, res) => {
  const q =
    "SELECT c.*, u.profilePic, u.username FROM comments AS c JOIN users AS u ON (c.commentUserId = u.id) WHERE c.commentPostId = ? ORDER BY createdAt DESC";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const deleteComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userId) => {
    if (err) return res.status(403).json(err);

    const commentId = req.params.id;
    const q = "DELETE FROM comments WHERE `id` = ? AND `commentUserId` = ?";

    db.query(q, [commentId, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Comment has been deleted!");
      return res.status(403).json("You can delete only your comment!");
    });
  });
};
