import Need from '../../models/Need';

export default {
  getNeeds: () => Need.find({}).sort({ createdAt: -1 }),
  getNeed: (_, { _id }) => Need.findById(_id),
  createNeed: (_, args) => Need.create(args),
  updateNeed: (_, { _id, ...rest }) =>
    Need.findByIdAndUpdate(_id, rest, { new: true }),
  deleteNeed: async (_, { _id }) => {
    try {
      await Need.findByIdAndRemove(_id);
      return {
        message: 'Delete Success!'
      };
    } catch (error) {
      throw error;
    }
  }
};
