import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true }
);

ConversationSchema.index({ author: 1, recipient: 1 }, { unique: true });

export default mongoose.model("Conversation", ConversationSchema);
