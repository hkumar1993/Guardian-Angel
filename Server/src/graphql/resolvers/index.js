import GraphQLDate from "graphql-date";
import NeedResolvers from "./need-resolver";
import UserResolvers from "./user-resolvers";
import ConversationResolvers from "./conversation-resolvers.js";
import UserTagResolvers from "./userTag-resolvers.js";
import NeedTagResolvers from "./needTag-resolvers.js";
import NeedRequestResolvers from "./needRequest-resolvers.js";
import MessageResolvers from "./message-resolvers.js";

import User from "../../models/User";
import Need from "../../models/Need";
import Tag from "../../models/Tag";
import Area from "../../models/Area";
import Conversation from "../../models/Conversation";

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
  AreaFollow: {
    user: ({ user }) => User.findById(user),
    area: ({ area }) => Area.findById(area)
  },
  Conversation: {
    recipient: ({ recipient }) => User.findById(recipient),
    author: ({ author }) => User.findById(author)
  },
  Message: {
    conversation: ({ conversation }) => Conversation.findById(conversation),
    author: ({ author }) => User.findById(author)
  },

  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed,
    getConversation: ConversationResolvers.getConversation,
    getUserConversations: ConversationResolvers.getUserConversations,
    getMessage: MessageResolvers.getMessage,
    getUserTag: UserTagResolvers.getUserTag,
    getNeedTag: NeedTagResolvers.getNeedTag,
    getUserTags: UserTagResolvers.getUserTags,
    getNeedTags: NeedTagResolvers.getNeedTags,
    getUserNeeds: NeedResolvers.getUserNeeds,
    getNeedRequest: NeedRequestResolvers.getNeedRequest,
    me: UserResolvers.me
  },

  Mutation: {
    createNeed: NeedResolvers.createNeed,
    createNeedTag: NeedTagResolvers.createNeedTag,
    createConversation: ConversationResolvers.createConversation,
    deleteConversation: ConversationResolvers.deleteConversation,
    createMessage: MessageResolvers.createMessage,
    createUserTag: UserTagResolvers.createUserTag,
    deleteUserTag: UserTagResolvers.deleteUserTag,
    deleteNeedTag: NeedTagResolvers.deleteNeedTag,
    updateNeed: NeedResolvers.updateNeed,
    deleteNeed: NeedResolvers.deleteNeed,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  },

  Subscription: {
    conversationJoined: ConversationResolvers.conversationJoined
  }
};
