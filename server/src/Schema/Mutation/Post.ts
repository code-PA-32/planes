import { GraphQLList, GraphQLString } from "graphql";
import { PostType } from "../TypeDefs";
import { IPost } from "../../interface";

export const createPost = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    images: { type: GraphQLList(GraphQLString) },
  },
  async resolver(parent: unknown, args: Omit<IPost, "id">, req: Request) {
    // userId will be in req.userId as part of auth session
    const { title, images, description, planeId } = args;

    return args;
  },
};
