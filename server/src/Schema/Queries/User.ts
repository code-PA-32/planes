import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { UserType } from "../TypeDefs";
import { UserModel } from "../../Models";

export const getAllUser = {
  type: new GraphQLList(UserType),
  async resolve() {
    try {
      return await UserModel.find()
        .populate({ path: "currentPlane" })
        .populate({ path: "lastPlanes" })
        .lean();
    } catch (error) {
      return new Error("Cant get users list");
    }
  },
};

export const getUserById = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent: unknown, args: any) {
    try {
      return await UserModel.findById(args.id)
        .populate([{ path: "currentPlane" }, { path: "lastPlanes" }])
        .lean();
    } catch (error) {
      throw new Error("Failed to get user by ID");
    }
  },
};
