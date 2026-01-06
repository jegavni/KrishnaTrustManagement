import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  receivedBy: { type: String }
});

export default mongoose.model("Donation", donationSchema);
