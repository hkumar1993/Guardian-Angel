import GraphQLDate from "graphql-date";
import NeedResolvers from "./need-resolver";
import UserResolvers from "./user-resolvers";
import UserTagResolvers from "./userTag-resolvers.js";

export default {
  Date: GraphQLDate,
  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed,
    getUserTags: UserTagResolvers.getUserTags,
    me: UserResolvers.me
  },

  Mutation: {
    createNeed: NeedResolvers.createNeed,
    createUserTag: UserTagResolvers.createUserTag,
    updateNeed: NeedResolvers.updateNeed,
    deleteNeed: NeedResolvers.deleteNeed,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
