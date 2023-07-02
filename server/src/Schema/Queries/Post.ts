import { GraphQLList } from "graphql";
import { PostType } from "../TypeDefs";
import { PostModel } from "../../Models";

export const getAllPost = {
  type: new GraphQLList(PostType),
  async resolve() {
    try {
      return await PostModel.find()
        .populate({ path: "user" })
        .populate({ path: "plane" });
    } catch (error) {
      console.log(error);
      throw new Error("Cant load posts");
    }
  },
};
