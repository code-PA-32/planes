import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getAllUser, getAllPlanes, getAllPost } from "./Queries";
import { createUser, createPlane, createPost } from "./Mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUser,
    getAllPlanes,
    getAllPost,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createPost,
    createUser,
    createPlane,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
