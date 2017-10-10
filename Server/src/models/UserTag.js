import mongoose, { Schema } from "mongoose";

const UserTagSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId
  },
  tag_id: {
    type: Schema.Types.ObjectId
  }
});

export default mongoose.model("UserTag", UserTagSchema);
