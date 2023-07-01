import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planeSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  onSale: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  engine: {
    tbo: {
      type: Number,
      required: true,
    },
    overhaul: {
      type: Number,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
  },
  props: {
    manufacturer: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    hoursUsed: {
      type: String,
      required: true,
    },
  },
  avionics: {
    type: Map,
    of: String,
    default: {},
  },
  extra: [{ type: String }],
  exterior: {
    type: String,
    required: true,
  },
  interior: {
    type: String,
    required: true,
  },
  inspection: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

export const PlaneModel = mongoose.model("Plane", planeSchema);
