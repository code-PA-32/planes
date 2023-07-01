import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  images: [
    {
      type: String,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  planeId: {
    type: Schema.Types.ObjectId,
    ref: "Plane",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const PostModel = mongoose.model("Post", postSchema);
