
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelsSchema = new Schema({});

const Channels = mongoose.model("channels", ChannelsSchema);

module.exports = Channels;