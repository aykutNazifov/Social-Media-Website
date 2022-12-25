import { db } from "../utils/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  let q = "SELECT * FROM users WHERE email=?";

  db.query(q, req.body.email, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist");

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(req.body.password, salt);

    q = "INSERT INTO users (`username`, `email`,`password`) VALUE (?)";

    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("User has been created!");
    });
  });
};

export const login = (req, res) => {
  let q = "SELECT * FROM users WHERE email=?";

  db.query(q, req.body.email, (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0)
      return res.status(409).json("Wrong email or password!");

    const checkPassword = bcryptjs.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(409).json("Wrong email or password!");

    const token = jwt.sign(data[0].id, "privateKey");

    const { password, ...others } = data[0];
    return res.cookie("accessToken", token).status(200).json(others);
  });
};

export const logout = (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json("User has been signed out.");
};
