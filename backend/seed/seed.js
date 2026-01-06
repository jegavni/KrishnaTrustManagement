import bcrypt from "bcryptjs";
import { users } from "../models/User.js";

export const seedAdmin = async () => {
  const adminExists = users.find(u => u.role === "admin");

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    users.push({
      id: 1,
      username: "admin",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin user seeded");
  }
};
