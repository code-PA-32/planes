import { GraphQLList, GraphQLString } from "graphql";
import { PostType } from "../TypeDefs";
import { PostModel } from "../../Models";

export const createPost = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    images: { type: GraphQLList(GraphQLString) },
  },
  async resolve(parent: unknown, args: any) {
    const { title, images, description } = args;

    try {
      const post = new PostModel({
        title,
        description,
        images,
        plane: "64a175661f0cc41e879b291a",
        user: "64a15b2959c5af5daf3d6d71",
      });

      await post.save();

      return post;
    } catch (error) {
      console.log(error);
      throw new Error("Can't create a post");
    }
  },
};
