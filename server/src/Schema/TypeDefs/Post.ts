import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import { UserType } from "./User";
import { PlaneType } from "./Plane";

export const PostType: GraphQLObjectType<undefined, undefined> =
  new GraphQLObjectType({
    name: "Post",
    fields: () => ({
      _id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      images: {
        type: new GraphQLList(GraphQLString),
      },
      description: { type: new GraphQLNonNull(GraphQLString) },
      date: { type: new GraphQLNonNull(GraphQLString) },
      userId: { type: UserType },
      planeId: { type: PlaneType },
    }),
  });
