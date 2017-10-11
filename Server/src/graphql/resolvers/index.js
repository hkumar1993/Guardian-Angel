import GraphQLDate from "graphql-date";
import NeedResolvers from "./need-resolver";
import UserResolvers from "./user-resolvers";
import UserTagResolvers from "./userTag-resolvers.js";

import User from "../../models/User";

export default {
  Date: GraphQLDate,
  Need: {
    user: ({ user }) => User.findById(user)
  },

  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed,
    getUserTags: UserTagResolvers.getUserTags,
    getUserNeeds: NeedResolvers.getUserNeeds,
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
