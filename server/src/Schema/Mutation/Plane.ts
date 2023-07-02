import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLScalarType,
  Kind,
} from "graphql";
import { PlaneType } from "../TypeDefs";
import { PlaneModel } from "../../Models";

export const createPlane = {
  type: PlaneType,
  args: {
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
    engine: {
      type: new GraphQLInputObjectType({
        name: "EngineInput",
        fields: {
          tbo: { type: GraphQLInt },
          overhaul: { type: GraphQLInt },
          manufacturer: { type: GraphQLString },
        },
      }),
    },
    props: {
      type: new GraphQLInputObjectType({
        name: "PropsInput",
        fields: {
          manufacturer: { type: GraphQLString },
          details: { type: GraphQLString },
          hoursUsed: { type: GraphQLInt },
        },
      }),
    },
    avionics: { type: GraphQLString },
  },
  async resolve(parent: unknown, args: { [argName: string]: any }) {
    const {
      category,
      manufacturer,
      model,
      onSale,
      price,
      description,
      year,
      serialNumber,
      condition,
      totalTime,
      seats,
      extra,
      interior,
      exterior,
      inspection,
      images,
      engine,
      props,
      avionics,
    } = args;

    try {
      console.log('try')
      const newPlane = new PlaneModel({
        category,
        manufacturer,
        model,
        onSale,
        price,
        description,
        year,
        serialNumber,
        condition,
        totalTime,
        seats,
        extra,
        interior,
        exterior,
        inspection,
        images,
        engine,
        props,
        avionics,
        owner: "64a15b2959c5af5daf3d6d71",
      });
      await newPlane.save();
      return newPlane;
    } catch (error) {
      console.log(error)
      throw new Error("Cant create a plane");
    }
  },
};
