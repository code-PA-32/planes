import { GraphQLList } from "graphql";
import { PlaneType } from "../TypeDefs";

export const getAllPlanes = {
  type: new GraphQLList(PlaneType),
  async resolve() {
    return {}
  },
};
