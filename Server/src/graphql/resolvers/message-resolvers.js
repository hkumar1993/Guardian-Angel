import Message from "../../models/Message";
import { requireAuth } from "../../services/auth";

export default {
  getMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Message.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getConversationMessages: async (_, args, { user}) => {
    try {
      await requireAuth(user);
      return Message.find({conversation: _id}).sort({createdAt: -1})
    } catch (error) {
      throw error;
    }
  }

  // getMessages: async (_, { _id }, { user }) => {
  //   try {
  //     await requireAuth(user);
  //     return Message.find({ user: _id }).sort({ createdAt: -1 });
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  createMessage: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Message.create(args);
    } catch (error) {
      throw error;
    }
  },

  deleteMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const message = await Message.findById(_id);
      if (!message) {
        throw new Error("Not Found!");
      }
      await message.remove();

      return {
        message: "Delete successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
