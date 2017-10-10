import mongoose, { Schema } from "mongoose";

const NeedSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Need", NeedSchema);
