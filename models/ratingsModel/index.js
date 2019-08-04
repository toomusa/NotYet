
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
  date: { type: Date, default: new Date(Date.now()) },
  score: {
    type: Number,
    min: 1,
    max: 10,
    required: false
  },
  review: {
    type: String,
    required: false 
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  media: [{
    current: {
      type: Boolean,
      default: false
    },
    ref_movie: {
      type: Schema.Types.ObjectId,
      ref: "Movie"
    },
    ref_show: {
        type: Schema.Types.ObjectId,
        ref: "Show"
    },
  }]
});

const Rating = mongoose.model("Rating", RatingsSchema);

module.exports = Rating;
