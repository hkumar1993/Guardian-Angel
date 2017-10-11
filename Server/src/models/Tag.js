import mongoose, { Schema } from "mongoose";

const TagSchema = new Schema({
  title: {
    type: String,
    unique: true
  }
});

export default mongoose.model("Tag", TagSchema);
