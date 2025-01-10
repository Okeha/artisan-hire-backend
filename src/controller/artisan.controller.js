const {
  createArtisan,
  getAllArtisans,
  getOneArtisan,
} = require("./../service/artisan.service");
const artisanRouter = require("express").Router();

artisanRouter.post("/", createArtisan);

artisanRouter.get("/", getAllArtisans);

artisanRouter.get("/:id", getOneArtisan);

module.exports = artisanRouter;
