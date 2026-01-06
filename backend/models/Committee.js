import mongoose from "mongoose";

const committeeSchema = new mongoose.Schema({
  president: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  vicePresident: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  secretary: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  viceSecretary: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  treasurer: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  viceTreasurer: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  termFrom: Date,
  termTo: Date
});

export default mongoose.model("Committee", committeeSchema);
