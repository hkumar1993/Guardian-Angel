import UserTag from '../../models/UserTag';
import User from '../../models/User';
import { requireAuth } from '../../services/auth';

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

  createUserTag: async (_, { userID, tagID }, { user }) => {
    // console.log('ARGs=======', args);
    console.log('userID ======= ', userID);
    console.log('tagID ======= ', tagID);
    console.log('user ======= ', user);

    try {
      // const user = await User.findOne({ _id: userID });
      console.log('user-=========', user);
      await requireAuth(user);
      // return UserTag.create(args);

      return UserTag.create({ user: userID, tag: tagID });
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
        message: 'Delete successful!'
      };
    } catch (error) {
      throw error;
    }
  }
};
