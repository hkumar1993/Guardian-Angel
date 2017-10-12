import NeedTag from "../../models/NeedTag";
import { requireAuth } from "../../services/auth";

export default {
  getNeedTag: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return NeedTag.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getNeedTags: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return NeedTag.find({ user: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createNeedTag: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return NeedTag.create(args);
    } catch (error) {
      throw error;
    }
  },

  deleteNeedTag: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const needTag = await NeedTag.findById(_id);
      if (!needTag) {
        throw new Error("Not Found!");
      }
      await needTag.remove();

      return {
        message: "Delete successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
