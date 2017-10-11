import NeedRequest from "../../models/NeedRequest";
import { requireAuth } from "../../services/auth";

export default {
  getNeedRequest: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return NeedRequest.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getNeedRequests: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return NeedRequest.find({ user: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createNeedRequest: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return NeedRequest.create(args);
    } catch (error) {
      throw error;
    }
  },

  deleteNeedTag: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const needRequest = await NeedRequest.findOne({ _id, user: user._id });
      if (!need) {
        throw new Error("Not Found!");
      }
      await needRequest.remove();

      return {
        message: "Delete successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
