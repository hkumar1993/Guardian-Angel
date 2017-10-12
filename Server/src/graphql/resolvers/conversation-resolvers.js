import Conversation from "../../models/Conversation";
import { requireAuth } from "../../services/auth";
import ConversationResolvers from "./conversation-resolvers";

import User from "../../models/User";

export default {
  getConversation: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Conversation.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getConversations: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Conversation.find({ user: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createConversation: async (_, args, { user }) => {
    try {
      console.log(args);
      await requireAuth(user);
      const conversation = await Conversation.create(args);

      const author = await User.findOne({ _id: args["author"] });
      const recipient = await User.findOne({ _id: args["recipient"] });

      console.log("author is ", author);
      console.log("recipient is ", recipient);
      console.log("conversation is ", conversation._id);

      author["conversations"].push(conversation._id);
      recipient["conversations"].push(conversation._id);

      author.save();
      recipient.save();

      return conversation;
    } catch (error) {
      throw error;
    }
  },

  deleteConversation: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const conversation = await Conversation.findById(_id);
      if (!conversation) {
        throw new Error("Not Found!");
      }
      await conversation.remove();

      return {
        message: "Delete successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
