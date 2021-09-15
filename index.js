const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

const Superheros = require("./routes/routes");

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use("/api", Superheros);

dotenv.config({ path: path.join(__dirname, "./.env") });

async function start() {
  try {
    const { MONGO_URI } = process.env;
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server started on Port ${PORT}.....`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
