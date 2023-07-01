import { GraphQLInputObjectType, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs";
import { IUser } from "../../interface";
import { UserModel } from "../../Models";

export const createUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    location: {
      type: new GraphQLInputObjectType({
        name: "LocationInput",
        fields: {
          city: { type: GraphQLString },
          country: { type: GraphQLString },
        },
      }),
    },
  },
  async resolve(
    parent: unknown,
    args: { [argName: string]: any },
    req: Request
  ) {
    const { name, username, password, phone, email, location } = args;

    try {
      const user = new UserModel({
        name,
        username,
        password,
        phone,
        email,
        location: {
          city: location.city,
          country: location.country,
          // will be calculated
          coords: { lat: 0, lng: 0 },
        },
      });
      // await user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};
