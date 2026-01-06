import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/roleAuth.js";
import { users } from "../models/User.js";


const router = express.Router();

/* CREATE BOARD MEMBER – ADMIN ONLY */
router.post(
  "/board-member",
  verifyToken,
  allowRoles("admin"),
  async (req, res) => {
    const { username, password } = req.body;

    const exists = users.find(u => u.username === username);
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const boardMember = {
      id: Date.now(),
      username,
      password: hashedPassword,
      role: "boardMember",
    };

    users.push(boardMember);
    res.status(201).json({ message: "Board member created" });
  }
);



// Register (one time)
router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const admin = await Admin.create({
    username: req.body.username,
    password: hashed
  });
  res.json(admin);
});

// Login
router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(401).json("Invalid user");

  const isMatch = await bcrypt.compare(req.body.password, admin.password);
  if (!isMatch) return res.status(401).json("Invalid password");

  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

router.post(
  "/",
  auth,
  allowRoles("admin", "president", "secretary"),
  async (req, res) => {
    // update committee
  }
);
router.post(
  "/donations",
  auth,
  allowRoles("admin", "treasurer"),
  addDonation
);

export default router;
