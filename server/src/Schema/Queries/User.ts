import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs";

export const getAllUser = {
    type: new GraphQLList(UserType),
    async resolve(){
        
    }
}