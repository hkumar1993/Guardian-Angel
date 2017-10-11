import mongoose, { Schema } from "mongoose";

const NeedTagSchema = new Schema({
  need: {
    type: Schema.Types.ObjectId
  },
  tag: {
    type: Schema.Types.ObjectId
  }
});

NeedTagSchema.index({ need: 1, tag: 1 }, { unique: true });

export default mongoose.model("NeedTag", NeedTagSchema);
