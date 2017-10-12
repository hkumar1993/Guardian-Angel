import Need from "../../models/Need";
import { requireAuth } from "../../services/auth";

export default {
  getNeed: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Need.findById(_id);
    } catch (error) {
      throw error;
    }
  },

  getNeeds: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Need.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  getUserNeeds: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Need.find({ user: _id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },

  createNeed: async (_, args, { user }) => {
    try {
      console.log("ARGS=========", args);
      console.log("user=========", user);

      await requireAuth(user);
      return Need.create({ ...args, user: user._id });
    } catch (error) {
      throw error;
    }
  },

  updateNeed: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const need = await Need.findOne({ _id, user: user._id });

      if (!need) {
        throw new Error("Not Found!");
      }

      Object.entries(rest).forEach(([key, value]) => {
        need[key] = value;
      });

      return need.save();
    } catch (error) {
      throw error;
    }
  },

  deleteNeed: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);

      const need = await Need.findOne({ _id, user: user._id });
      // const need = await Need.findOne({ _id });
      if (!need) {
        throw new Error("Not Found!");
      }
      await need.remove();

      return {
        message: "Delete Success!"
      };
    } catch (error) {
      throw error;
    }
  }
};
