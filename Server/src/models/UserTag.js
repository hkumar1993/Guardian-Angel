import mongoose, { Schema } from 'mongoose';

const UserTagSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tag: {
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }
});

export default mongoose.model('UserTag', UserTagSchema);
