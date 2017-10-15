import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId
  },
  conversation: {
    type: Schema.Types.ObjectId
  }
}, { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
