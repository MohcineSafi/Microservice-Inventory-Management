// routes/stock.js

const express = require("express");
const router = express.Router();
const Stock = require("../models/Stock");

router.post("/", async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const stock = new Stock({ product, quantity });
    await stock.save();
    res.status(201).send(stock);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find().populate("product");
    res.send(stocks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id).populate("product");
    if (!stock) {
      return res.status(404).send();
    }
    res.send(stock);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!stock) {
      return res.status(404).send();
    }
    res.send(stock);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id);
    if (!stock) {
      return res.status(404).send();
    }
    res.send(stock);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
