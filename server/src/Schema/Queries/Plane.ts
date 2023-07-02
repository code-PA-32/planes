import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { PlaneType } from "../TypeDefs";
import { PlaneModel } from "../../Models";

export const getAllPlanes = {
  type: new GraphQLList(PlaneType),
  async resolve() {
    try {
      return await PlaneModel.find().populate({ path: "owner" });
    } catch (error) {
      console.log(error);
      throw new Error("Cant load planes");
    }
  },
};

export const getPlaneById = {
  type: PlaneType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent: unknown, args: any) {
    try {
      return await PlaneModel.findById(args.id).populate({ path: "owner" });
    } catch (error) {
      console.log(error);
      throw new Error("Cant get plane by id");
    }
  },
};
