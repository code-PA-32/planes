import { GraphQLInputObjectType, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs";
import { IUser } from "../../interface";
import { UserModel } from "../../Models";
import { getLocation } from "../../middleware/getLocation";

export const createUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
  },
  async resolve(
    parent: unknown,
    args: { [argName: string]: string },
    req: Request
  ) {
    const { name, username, password, phone, email, city, country } = args;
    const userLocation = await getLocation(city, country);
    try {
      const user = new UserModel({
        name,
        username,
        password,
        phone,
        email,
        location: userLocation,
      });
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};
