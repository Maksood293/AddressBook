import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  address: { type: String, required: true },
  city:{ type: String, required: true },
  pin:{ type: Number, required: true }
});

const AddressModel = mongoose.model("address", addressSchema);

export default AddressModel;