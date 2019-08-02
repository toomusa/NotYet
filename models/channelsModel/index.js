
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelsSchema = new Schema({
  topic: {
    type: String,
    required: false
  },
  admin_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  open_invite: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    date: new Date(Date.now())
  }
});

  // - channel ( 
  //   _id,
  //   topic: String, 
  //   admin_id: ref[ user._id ] 
  //   open_invite: Boolean,
  //   )

const Channels = mongoose.model("channels", ChannelsSchema);

module.exports = Channels;