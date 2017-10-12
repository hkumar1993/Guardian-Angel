import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId
  },
  recipient: {
    type: Schema.Types.ObjectId
  }
});

ConversationSchema.index({ author: 1, recipient: 1 }, { unique: true });

export default mongoose.model("Conversation", ConversationSchema);
