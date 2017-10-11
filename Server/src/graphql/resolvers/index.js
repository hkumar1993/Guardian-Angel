import GraphQLDate from "graphql-date";
import NeedResolvers from "./need-resolver";
import UserResolvers from "./user-resolvers";
import UserTagResolvers from "./userTag-resolvers.js";
import NeedTagResolvers from "./needTag-resolvers.js";
import NeedRequestResolvers from "./needRequest-resolvers.js";

import User from "../../models/User";
import Need from "../../models/Need";
import Tag from "../../models/Tag";
import Location from "../../models/Location";

export default {
  Date: GraphQLDate,
  Need: {
    user: ({ user }) => User.findById(user)
  },
  UserTag: {
    user: ({ user }) => User.findById(user),
    tag: ({ tag }) => Tag.findById(tag)
  },
  NeedTag: {
    need: ({ need }) => Need.findById(need),
    tag: ({ tag }) => Tag.findById(tag)
  },
  NeedRequest: {
    need: ({ need }) => Need.findById(need),
    user: ({ user }) => User.findById(user)
  },
  LocationFollow: {
    user: ({ user }) => User.findById(user),
    location: ({ location }) => Location.findById(location)
  },

  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed,
    getUserTags: UserTagResolvers.getUserTags,
    getNeedTags: NeedTagResolvers.getNeedTags,
    getUserNeeds: NeedResolvers.getUserNeeds,
    getNeedRequest: NeedRequestResolvers.getNeedRequest,
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
