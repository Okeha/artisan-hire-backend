const mongoose = require("mongoose");

const ArtisanSchema = new mongoose.Schema({
  profilePic: { type: String, required: false, default: "" },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  stars: { type: Number, required: false, default: 0 },
  category: { type: String, required: false, default: "" },
  price: { type: Number, required: true },
  skills: { type: Array, required: false, default: [] },
});

const Artisan = mongoose.model("artisan", ArtisanSchema);

module.exports = Artisan;
