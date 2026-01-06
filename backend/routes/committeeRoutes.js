import express from "express";
import auth from "../middleware/auth.js";
import Committee from "../models/Committee.js";

const router = express.Router();

// Get current committee
router.get("/", async (req, res) => {
  const committee = await Committee.findOne()
    .populate("president vicePresident secretary viceSecretary treasurer viceTreasurer");
  res.json(committee);
});

// Create / Update committee
router.post("/", auth, async (req, res) => {
  const committee = await Committee.findOneAndUpdate(
    {},
    req.body,
    { upsert: true, new: true }
  );
  res.json(committee);
});

export default router;
