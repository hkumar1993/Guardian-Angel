import mongoose, { Schema } from "mongoose";

const AreaSchema = new Schema({
  zipcode: {
    type: Number,
    unique: true
  }
});

export default mongoose.model("Area", AreaSchema);
