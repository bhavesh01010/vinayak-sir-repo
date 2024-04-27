import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Branch: { type: String, required: true },
  Roll: { type: String, required: true, unique: true },
  Email: { type: String, required: true, unique: true },
  Hostel: { type: String, required: true },
  Year: { type: String, required: true },
  Phone: { type: String, required: true, unique: true },
  Interest: [{ type: String }],
});

const Registrations = mongoose.model("Registration", studentSchema);
export default Registrations;
