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
  plane: {
    type: Schema.Types.ObjectId,
    ref: "Plane",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const PostModel = mongoose.model("Post", postSchema);
