// routes/memberRoutes.js
import express from "express";
import { getMembers, addMember } from "../controllers/memberController.js";
import multer from "multer";
import auth from "../middleware/auth.js";

router.post("/", auth, upload.single("photo"), addMember);


const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage });

router.get("/", getMembers);
router.post("/", upload.single("photo"), addMember);

export default router;
