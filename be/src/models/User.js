import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "../upload/avata.jpg",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", UserSchema);
