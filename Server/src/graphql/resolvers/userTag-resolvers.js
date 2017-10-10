import UserTag from "../../models/UserTag";
import { requireAuth } from "../../services/auth";

export default {
  getUserTag: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return UserTag.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getUserTags: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return UserTag.find({})
        .select({ userID: _id })
        .sort({ createdAt: -1 }); // should be something like findAllWhere
    } catch (error) {
      throw error;
    }
  },

  createUserTag: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return UserTag.create(args);
    } catch (error) {
      throw error;
    }
  },

  deleteUserTag: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const userTag = await UserTag.findOne({ _id, user: user._id });
      if (!need) {
        throw new Error("Not Found!");
      }
      await userTag.remove();

      return {
        message: "Delete successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};
