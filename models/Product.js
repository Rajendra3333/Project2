import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: [true, "Product ID is required"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Product name must be at least 3 characters long"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["Electronics", "Clothing", "Food", "Books", "Other"],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be at least 1"],
    max: [100000, "Price is too high"],
  },
  quantity_in_stock: {
    type: Number,
    required: true,
    min: [0, "Quantity cannot be negative"],
  },
  date_added: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
