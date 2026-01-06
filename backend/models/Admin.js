import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
  type: String,
  enum: ["admin", "president", "secretary", "treasurer"],
  default: "admin"
}

});

export default mongoose.model("Admin", adminSchema);
