
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//test schema
const MessagesSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  channel: { 
    type: String,
    required: true
  },
  content: {            //maybe call it comment, but need to change on review.js if so
    type: String
  },
  likes: {
    type: Number
  },
  date: { type: Date, default: Date.now 
  }
});

//real schema
// const MessagesSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },
//   channel: { 
//     type: Schema.Types.ObjectId,
//     ref: "Channel",
//     required: true
//   },
//   content: {            //maybe call it comment, but need to change on review.js if so
//     type: String
//   },
//   likes: {
//     type: Number
//   },
//   date: { type: Date, default: Date.now 
//   }
// });

const Messages = mongoose.model("messages", MessagesSchema);

module.exports = Messages;

// - message ( 
//   _id, author: ref user._id, 
//   channel: ref channel._id, 
//   content: String, 
//   likes: Integer 
//   )
