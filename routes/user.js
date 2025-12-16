// routes/user.js
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = express.Router();

// AUTH CHECK
router.get("/me", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("No Token");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    res.json(user);
  } catch (err) {
    res.status(401).json("Unauthorized");
  }
});

export default router;
