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
      return UserTag.find({ user: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createUserTag: async (_, args, { user }) => {
    try {
      console.log("ARGS=========", args);
      console.log("user=========", user);

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
      if (!userTag) {
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
