import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// CREATE Product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
