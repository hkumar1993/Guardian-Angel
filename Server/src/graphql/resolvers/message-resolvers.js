import Message from "../../models/Message";
import { requireAuth } from "../../services/auth";
import { pubsub } from '../../config/pubsub';

const MESSAGE_ADDED = 'messageAdded';

export default {
  getMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Message.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getLastMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Message.findOne({ conversation: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  getConversationMessages: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Message.find({ conversation: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createMessage: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      const message = await Message.create(args);

      pubsub.publish(MESSAGE_ADDED, { [MESSAGE_ADDED]: message })

      return message;
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
  },
  messageAdded: {
    subscribe: () => pubsub.asyncIterator(MESSAGE_ADDED)
  }
};
