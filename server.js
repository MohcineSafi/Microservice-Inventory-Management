// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGODB_URI =
  "mongodb+srv://mohcinsafi:pwfAhq9K0NHivwwP@cluster0.vlyyfwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

app.use("/api/products", require("./routes/product"));

const orderRoutes = require("./routes/order");
app.use("/api/orders", orderRoutes);

const stockRoutes = require("./routes/stock");
app.use("/api/stocks", stockRoutes);
