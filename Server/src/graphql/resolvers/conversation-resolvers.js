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

      const authorConversations = await Conversation.find({ author: _id })
      const recipientConversations = await Conversation.find({ recipient: _id })

      console.log(authorConversations);
      console.log(recipientConversations);
      const allConversations = authorConversations.concat(
        recipientConversations
      ).sort( (x, y) => x.updatedAt < y.updatedAt );

      // return Conversation.find({ author: _id }).sort({ createdAt: -1 });
      return allConversations;
    } catch (error) {
      throw error;
    }
  },

  createConversation: async (_, args, { user }) => {
    try {
      console.log(args);
      console.log(args);

      await requireAuth(user);
      console.log(user);

      const conversation = await Conversation.create(
        {author: user._id, recipient: args["recipient"]}
      )
      console.log(conversation);
      pubsub.publish(CONVERSATION_JOINED, { [CONVERSATION_JOINED]: conversation })

      // const conversation = await Conversation.create(args);

      const author = await User.findOne({ _id: user._id })
      const recipient = await User.findOne({ _id: args["recipient"] });

      // console.log("author is ", author);
      // console.log("recipient is ", recipient);
      // console.log("conversation is ", conversation._id);

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
