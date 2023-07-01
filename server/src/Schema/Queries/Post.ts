import { GraphQLList } from "graphql";
import { PostType } from "../TypeDefs";

export const getAllPost = {
  type: new GraphQLList(PostType),
  async resolve() {},
};
