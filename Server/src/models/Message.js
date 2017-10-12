import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId
  },
  conversation: {
    type: Schema.Types.ObjectId
  }
});

export default mongoose.model("Message", MessageSchema);
