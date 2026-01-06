import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  photo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Member", memberSchema);
