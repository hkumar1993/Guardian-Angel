import Conversation from "../../models/Conversation";
import { requireAuth } from "../../services/auth";
import { pubsub } from '../../config/pubsub';

import User from "../../models/User";
import Message from "../../models/Message";

const CONVERSATION_ADDED = 'conversationAdded';

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
      console.log("Conversation Begin");
      await requireAuth(user);

      const authorConversations = await Conversation.find({ author: _id })
      const recipientConversations = await Conversation.find({ recipient: _id })

      console.log(authorConversations);
      console.log(recipientConversations);
      const allConversations = authorConversations.concat(
        recipientConversations
      ).sort( (x, y) => x['updatedAt'] < y['updatedAt'] );

      // return Conversation.find({ author: _id }).sort({ createdAt: -1 });
      // return allConversations;

      // const result = [];
      const result = await allConversations.filter(async conversation => {
        console.log("convsersdsfd Inside = ", conversation);
        const message = await Message.find({ conversation: conversation._id});
        console.log("message=s=df=sdf==== ", message  );
        return message.length > 0;
      });

      console.log("allConversations====", allConversations);
      console.log("result====", result);

      const conversations = result;

      return conversations;
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

      const conversationExist1 = await Conversation.findOne({ author: args['recipient'], recipient: user._id })

      // console.log("conversationExist1 ==== ", conversationExist1);
      if(conversationExist1) {
        console.log("conversationExist1 INside ==== ", conversationExist1);
        return conversationExist1;
      }

      const conversationExist2 = await Conversation.findOne({ author: user._id, recipient: args['recipient'] })

      // console.log("conversationExist1 ==== ", conversationExist1);
      if(conversationExist2) {
        console.log("conversationExist2 INside ==== ", conversationExist2);
        return conversationExist2;
      }


      const conversation = await Conversation.create(
        {author: user._id, recipient: args["recipient"]}
      )
      console.log(conversation);

      // const conversation = await Conversation.create(args);

      console.log("heloo");

      const author = await User.findOne({ _id: user._id })
      const recipient = await User.findOne({ _id: args["recipient"] });

      // console.log("author is ", author);
      // console.log("recipient is ", recipient);
      // console.log("conversation is ", conversation._id);

      author["conversations"].push(conversation._id);
      recipient["conversations"].push(conversation._id);

      author.save();
      recipient.save();

      pubsub.publish(CONVERSATION_ADDED, { [CONVERSATION_ADDED]: conversation });

      console.log("Coversion ending===", conversation);

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

  conversationAdded: {
    subscribe: () => pubsub.asyncIterator(CONVERSATION_ADDED)
  }

};
