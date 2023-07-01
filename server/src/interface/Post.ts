import { ObjectId } from "mongoose";

export interface IPost {
  _id: ObjectId;
  images?: string[];
  title: string;
  description: string;
  date: Date;
  planeId: ObjectId;
  userId: ObjectId;
}
