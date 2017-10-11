import mongoose, { Schema } from "mongoose";

const LocationSchema = new Schema({
  zipcode: {
    type: Number,
    unique: true
  }
});

export default mongoose.model("Location", LocationSchema);
