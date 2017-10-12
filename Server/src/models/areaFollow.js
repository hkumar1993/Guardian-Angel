import mongoose, { Schema } from "mongoose";

const AreaFollowSchema = new Schema({
  area: {
    type: Schema.Types.ObjectId
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

export default mongoose.model("AreaFollow", AreaFollowSchema);
