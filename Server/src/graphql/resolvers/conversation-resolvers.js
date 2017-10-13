import Conversation from "../../models/Conversation";
import { requireAuth } from "../../services/auth";
import { pubsub }  from '../../config/pubsub';

import User from "../../models/User";

const CONVERSATION_JOINED = 'conversationJoined'

export default {
  getConversation: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Conversation.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getUserConversations: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Conversation.find({ author: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createConversation: async (_, args, { user }) => {
    try {
      console.log(args);
      await requireAuth(user);
      const conversation = await Conversation.create(args);

      pubsub.publish(CONVERSATION_JOINED, { [CONVERSATION_JOINED]: conversation })

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
  },

  conversationJoined: {
    subscribe: () => pubsub.asyncIterator(CONVERSATION_JOINED)
  }
};
