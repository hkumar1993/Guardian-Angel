import mongoose, { Schema } from 'mongoose';

const NeedSchema = new Schema(
  {
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model('Need', NeedSchema);
