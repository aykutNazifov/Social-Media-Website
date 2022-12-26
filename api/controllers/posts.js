import moment from "moment";
import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";

export const getAllPosts = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(400).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userData) => {
    if (err) return res.status(409).json("Token is not valid!");

    const q =
      "SELECT p.*, u.id as userId,name,username, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN follows AS f ON (p.userId = f.followedId) WHERE f.followerId= ? OR p.userId =?  ORDER BY p.createdAt DESC";

    db.query(q, [userData, userData], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getUserAllPosts = (req, res) => {
  const userId = req.params.userId;
  const token = req.cookies.accessToken;

  if (!token) return res.status(400).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userData) => {
    if (err) return res.status(409).json("Token is not valid!");

    const q =
      "SELECT p.*, u.id as userId,name,username, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC";

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(400).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userData) => {
    if (err) return res.status(409).json("Token is not valid!");

    const q =
      "INSERT INTO posts (`desc`, `userId`, `postPic`, `createdAt`) VALUE (?)";

    const myDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const values = [req.body.desc, userData, req.body.postPic, myDate];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(200).json(err);

      return res.status(200).json("Post has been created");
    });
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;

  const token = req.cookies.accessToken;

  if (!token) return res.status(400).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userData) => {
    if (err) return res.status(409).json("Token is not valid!");

    let q = "DELETE FROM posts WHERE `userId`=? AND `id`=?";

    db.query(q, [userData, postId], (err, data) => {
      if (err) return res.status(500).json(err);

      if (data.affectedRows > 0)
        return res.status(200).json("Post has been deleted!");

      return res.status(409).json("You can delete only your posts!");
    });
  });
};
