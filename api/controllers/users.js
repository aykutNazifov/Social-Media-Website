import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...others } = data[0];
    return res.status(200).json(others);
  });
};

export const getAllUsers = (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(409).json("You need to log in first!");

  jwt.verify(token, "privateKey", (err, userId) => {
    if (err) return res.status(409).json(err);

    const q =
      "UPDATE users SET  name = ?, website = ?, city = ?, work = ?, profilePic = ? WHERE id = ?";

    db.query(
      q,
      [
        req.body.name,
        req.body.website,
        req.body.city,
        req.body.work,
        req.body.profilePic,
        userId,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json("Your profile has been updated!");
      }
    );
  });
};
