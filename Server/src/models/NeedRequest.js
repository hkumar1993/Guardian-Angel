import mongoose, { Schema } from "mongoose";

const NeedRequestSchema = new Schema({
  need: {
    type: Schema.Types.ObjectId
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

NeedRequestSchema.index({ need: 1, user: 1 }, { unique: true });

export default mongoose.model("NeedRequest", NeedRequestSchema);
