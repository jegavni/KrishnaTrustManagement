import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import committeeRoutes from "./routes/committeeRoutes.js";
import { seedAdmin } from "./seed/seed.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Seed admin once
seedAdmin();

app.use("/api/committee", committeeRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running")
);
