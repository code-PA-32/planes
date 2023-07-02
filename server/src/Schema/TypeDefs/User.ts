import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLFieldConfigMap,
  GraphQLFloat,
  GraphQLList,
} from "graphql";
import { PlaneType } from "./Plane";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: (): GraphQLFieldConfigMap<undefined, undefined> => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    username: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    currentPlane: { type: PlaneType },
    lastPlanes: { type: GraphQLList(PlaneType) },
    location: {
      type: new GraphQLObjectType({
        name: "Location",
        fields: {
          city: { type: new GraphQLNonNull(GraphQLString) },
          country: { type: new GraphQLNonNull(GraphQLString) },
          coords: {
            type: new GraphQLObjectType({
              name: "Coords",
              fields: {
                lat: { type: GraphQLFloat },
                lng: { type: GraphQLFloat },
              },
            }),
          },
        },
      }),
    },
  }),
});
