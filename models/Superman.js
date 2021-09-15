const { Schema, model } = require("mongoose");

const schema = new Schema({
  nickname: { type: String, required: true, unique: true },
  real_name: { type: String, required: true },
  origin_description: { type: String, required: true },
  superpowers: { type: String, required: true },
  catch_phrase: { type: String, required: true },
});

module.exports = model("Superheros", schema);
