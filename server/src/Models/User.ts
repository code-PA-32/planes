import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentPlane: {
    type: Schema.Types.ObjectId,
    ref: "Plane",
  },
  lastPlanes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plane",
      default: [],
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      default: [],
    },
  ],
  location: {
    city: { type: String, required: true },
    country: { type: String, required: true },
    coords: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
});

export const UserModel = mongoose.model("User", userSchema);
