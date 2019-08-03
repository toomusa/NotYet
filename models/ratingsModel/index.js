
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  media_title: { //called showOrMovie
    type: String,
    required: true
  },
  comment: { //previously called summary
    type: String,
  },
  rating: { //1-10
    required: true,
    type: Number
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: "Channel"
  },
  date: { type: Date, default: Date.now 
  },
});

const Ratings = mongoose.model("ratings", RatingsSchema);

module.exports = Ratings;

// - review ( 
//   _id, 
//   author: ref user._id, 
//   showOrMovie, 
//   summary, 
//   rating, 
//   channel._id 
//   )