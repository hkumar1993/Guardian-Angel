import mongoose, { Schema } from "mongoose";

const AreaSchema = new Schema({
  zipcode: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  }
});

export default mongoose.model("Area", AreaSchema);
