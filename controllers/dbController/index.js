const db     = require("../../models");
const config = require("../../config");
const Messages = require("../../models/messagesModel")

//USER FUNCTIONS
const signUp = async (req, res) => {}
const signIn = async (req, res) => {}
const Logout = async (req, res) => {}
const saveShow = async (req, res) => {}
const saveMovie = async (req, res) => {}

// CHANNEL FUNCTIONS
const addChannel = async (req, res) => {} //create channel
const inviteToChannel = async (req, res) => {}
const receiveInvite = async (req, res) => {}

// MESSAGE FUNCTIONS
const sendMessage = async (req, res) => {
  //when send message, all other users but you must get message
  //message must be stored in message database, grabbing user info
  console.log(req.body);
  let {user, channel, content} = req.body;
  console.log("i'm hit")
  let newMessage = {};
    newMessage.user = user;
    newMessage.channel = channel;
    newMessage.content = content;
  let resp = await Messages.create(newMessage);
    try {
      console.log(resp +" added"); 
    } catch (error) {
      console.log(error)
    } 
  }

  // let newNote = await Note.create(note);
  //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})

const deleteMessage = async (req, res) => {}

module.exports = {sendMessage}

// a user can:
// - sign up
// - login
// - logout
// - create channels
// - view one chat (channel) at a time ??
// - be invited to a channel
// - invite others to any channel they are active(?) 
// - write messages
// - search a list of movies and show  
// - can save a show or movie as a favorites
// - can create a channel based on search results 
// - write a review
//   - no reviews no spoilers
// - rate an episode when you mark watched 
// - mute channel?
// - unmute channel?
// - leave a chat and see old history in archive