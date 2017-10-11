import mongoose, { Schema } from "mongoose";

const LocationFollowSchema = new Schema({
  location: {
    type: Schema.Types.ObjectId
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

LocationFollowSchema.index({ location: 1, user: 1 }, { unique: true });

export default mongoose.model("LocationFollow", LocationFollowSchema);
