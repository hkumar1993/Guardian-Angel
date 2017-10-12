import Conversation from "../../models/Conversation";
import { requireAuth } from "../../services/auth";

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
      await requireAuth(user);
      return Conversation.create(args);
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
