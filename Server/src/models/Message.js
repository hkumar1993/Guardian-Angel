import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  conversation: {
    type: Schema.Types.ObjectId,
    ref: "Conversation"
  }
}, { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
