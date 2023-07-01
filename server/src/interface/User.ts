import { ObjectId } from "mongoose";
import { Location } from "./Auxiliary";

export interface IUser {
  _id: ObjectId;
  username: string;
  phone: string;
  name: string;
  email: string;
  password: string;
  currentPlane: ObjectId;
  lastPlanes: ObjectId[];
  posts: ObjectId[];
  location: Location;
}
