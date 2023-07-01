import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLScalarType,
  Kind,
} from "graphql";

import { UserType } from "./User";
import { PostType } from "./Post";

export const PlaneType = new GraphQLObjectType({
  name: "Plane",
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    category: { type: GraphQLNonNull(GraphQLString) },
    manufacturer: { type: GraphQLNonNull(GraphQLString) },
    model: { type: GraphQLNonNull(GraphQLString) },
    onSale: { type: GraphQLNonNull(GraphQLBoolean) },
    price: { type: GraphQLInt },
    description: { type: GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLNonNull(GraphQLInt) },
    serialNumber: { type: GraphQLNonNull(GraphQLString) },
    condition: { type: GraphQLNonNull(GraphQLString) },
    totalTime: { type: GraphQLNonNull(GraphQLInt) },
    seats: { type: GraphQLNonNull(GraphQLInt) },
    extra: { type: GraphQLNonNull(GraphQLString) },
    exterior: { type: GraphQLNonNull(GraphQLString) },
    interior: { type: GraphQLNonNull(GraphQLString) },
    inspection: { type: GraphQLNonNull(GraphQLString) },
    images: { type: GraphQLList(GraphQLString) },
    owner: { type: UserType },
    posts: { type: GraphQLList(PostType) },
    engine: {
      type: new GraphQLObjectType({
        name: "Engine",
        fields: {
          tbo: { type: GraphQLInt },
          overhaul: { type: GraphQLInt },
          manufacturer: { type: GraphQLString },
        },
      }),
    },
    props: {
      type: new GraphQLObjectType({
        name: "Props",
        fields: {
          manufacturer: { type: GraphQLString },
          details: { type: GraphQLString },
          hoursUsed: { type: GraphQLInt },
        },
      }),
    },
    avionics: { type: GraphQLString },
  }),
});
