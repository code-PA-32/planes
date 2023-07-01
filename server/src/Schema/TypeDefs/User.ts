import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLFieldConfigMap,
} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: (): GraphQLFieldConfigMap<undefined, undefined> => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
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
                lat: { type: GraphQLInt },
                lng: { type: GraphQLInt },
              },
            }),
          },
        },
      }),
    },
  }),
});
