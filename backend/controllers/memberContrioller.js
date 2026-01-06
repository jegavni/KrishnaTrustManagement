// controllers/memberController.js
import fs from "fs";
import { v4 as uuid } from "uuid";

const filePath = "./data/members.json";

export const getMembers = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};

export const addMember = (req, res) => {
  const members = JSON.parse(fs.readFileSync(filePath));
  const newMember = {
    id: uuid(),
    name: req.body.name,
    role: req.body.role,
    phone: req.body.phone,
    photo: req.file ? req.file.filename : null
  };
  members.push(newMember);
  fs.writeFileSync(filePath, JSON.stringify(members, null, 2));
  res.json(newMember);
};
