
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({});

const Ratings = mongoose.model("ratings", RatingsSchema);

module.exports = Ratings;