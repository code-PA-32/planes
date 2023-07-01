import { ObjectId } from "mongoose";

export interface IPlane {
  _id: ObjectId;
  category: string;
  manufacturer: string;
  model: string;
  onSale: boolean;
  price?: number;
  description: string;
  year: number;
  serialNumber: string;
  condition: string;
  totalTime: number;
  seats: number;
  engine: {
    tbo: number;
    overhaul: number;
    manufacturer: string;
  };
  props: {
    manufacturer: string;
    details: string;
    hoursUsed: number;
  };
  avionics: {
    [key: string]: string;
  };
  extra: string[];
  exterior: string;
  interior: string;
  inspection: string;
  images: string[];
  owner: ObjectId;
  posts?: ObjectId[];
}
