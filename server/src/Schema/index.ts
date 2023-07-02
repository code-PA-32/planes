import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  getAllUser,
  getAllPlanes,
  getAllPost,
  getUserById,
  getPlaneById,
} from "./Queries";
import { createPost, createUser, createPlane } from "./Mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUser,
    getUserById,
    getPlaneById,
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
