import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema({
  author: {
    type: Schema.Type.ObjectId
  },
  recipient: {
    type: Schema.Type.ObjectID
  }
});

ConversationSchema.index({ author: 1, recipient: 1 }, { unique: true });

export default mongoose.model("Conversation", ConversationSchema);
