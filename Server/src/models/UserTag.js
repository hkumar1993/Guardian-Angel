import mongoose, { Schema } from "mongoose";

const UserTagSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  tag: {
    type: Schema.Types.ObjectId
  }
});

export default mongoose.model("UserTag", UserTagSchema);
