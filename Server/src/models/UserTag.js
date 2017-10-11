import mongoose, { Schema } from "mongoose";

const UserTagSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  tag: {
    type: Schema.Types.ObjectId
  }
});

UserTagSchema.index({ user: 1, tag: 1 }, { unique: true });

export default mongoose.model("UserTag", UserTagSchema);
