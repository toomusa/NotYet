
const mongoose = require("mongoose");
const db = require("../../models");

const messages = [
  "What up",
  "Whassup",
  "Whassssuuuuup",
  "Hey",
  "Its yo boy!",
  "Good evening",
  "Holla playa",
  "That's enoough y'all"
]

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

function hasItem(arr, id) {
  arr.map(message => {
    console.log("message")
    console.log(message)
    if (message.sent_messages._id === id) {
      return true;
    } else {
      return false;
    }
  })
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  return array;
}

const sendMessage = async (data, callback) => {
  console.log("Inside the controller sendMessage")
  console.log(data)

  let { content, chatId, userId, adminId } = data

  let newMessage = await db.Message.create({ 
    sender: userId,
    content: content,
    channel: {
      ref_channel: chatId,
      admin: (adminId === userId) ? true : false
    }}
  )

  let chatData = await db.Channel.findOneAndUpdate({_id: chatId},
      {$push: {messages: {
        sent_messages: newMessage._id,
        ref_channel: chatId,
        sender: userId
      }}}, {new: true})
      .populate("messages.sender", "username")
      .populate("messages.sent_messages")

  if (!isEmpty(chatData)) {
    let lastMessage = {chatId: chatData._id, messages: chatData.messages.pop()}
    console.log("lastMessage")
    console.log(lastMessage)
    callback(lastMessage)
  }
}

const createChannel = async (data, callback) => {
  console.log("I'm inside the controller createChannel")
  console.log(data)

  return new Promise( async (resolve, reject) => {
    let newChannel;
    let updatedUser;
    let channelResponse;

    try {
      let createChannel = await new db.Channel(data)
      await createChannel.save()
      newChannel = await db.Channel.findOneAndUpdate({_id: createChannel._id}, 
        {$push: {admin: userId, temp_messages: shuffle(messages)}}, {new: true})
    } catch (e) {
      console.log("Oooops", e)
    }

    try {
      updatedUser = await db.User.findByIdAndUpdate(userId, 
        {$push: {channels: newChannel.id}}, {new: true}).populate("Channel")
    } catch (e) {
      console.log("Oooops", e)
    }
    
    try {
      channelResponse = await db.Channel.findById(newChannel.id)
    } catch (e) {
      console.log("Oooops", e)
    }
    
    if (channelResponse && updatedUser) {
      let channelData = {Channels: channelResponse, Users: updatedUser};
      console.log("channelData")
      console.log(channelData)
      resolve();
      callback(channelData)
    }
  })
}


const loadDashboard = async (data, callback) => {
  console.log("I'm inside the controller loadDashboard")
  console.log(data)
  let userId = data
  console.log(userId)

  return new Promise( async (resolve, reject) => {
    let userData;
    let channelIds = [];
    let channelData;
    let CleanedUserData = {};
    
    try {
      userData = await db.User.findById(userId).populate("Channel")
      console.log("userData")
      console.log(userData)
      CleanedUserData.id = userData._id;
      CleanedUserData.username = userData.username;
      CleanedUserData.channels = userData.channels;
      CleanedUserData.show_channels = userData.show_channels;
      CleanedUserData.movie_channels = userData.movie_channels;
      CleanedUserData.inactive_channels = userData.inactive_channels;
      CleanedUserData.messages = userData.messages;
      CleanedUserData.friends = userData.friends;
      CleanedUserData.favorite_shows = userData.favorite_shows;
      CleanedUserData.favorite_movies = userData.favorite_movies;
    } catch (e) {
      console.log("Oooops", e)
    }

    // try {
    //   if (userData.channels) {
    //     userData.channels.map(channel => { channelIds.push(channel.id) })
    //     console.log("channelIds")
    //     console.log(channelIds)
    //   }
    // } catch (e) {
    //   console.log("Oooops", e)
    // }

    try {
      channelData = await db.Channel.find({_id: userData.channels})
        .populate("messages.sent_messages")
        .populate("messages.sender")
        .populate("messages.ref_channel")
      console.log("channelData")
      console.log(channelData)
    } catch (e) {
      console.log("Oooops", e)
    }
    
    if (CleanedUserData && channelData) {
      let dashboardData = {Users: CleanedUserData, Channels: channelData};
      console.log("dashboardData")
      console.log(dashboardData)
      resolve();
      callback(dashboardData)
    }
  })
}


module.exports = { createChannel, sendMessage, loadDashboard };



// const db     = require("../../models");
// const config = require("../../config");
// const Messages = require("../../models/messagesModel")

// //USER FUNCTIONS
// const signUp = async (req, res) => {}
// const signIn = async (req, res) => {}
// const Logout = async (req, res) => {}
// const saveShow = async (req, res) => {}
// const saveMovie = async (req, res) => {}

// // CHANNEL FUNCTIONS
// const addChannel = async (req, res) => {} //create channel
// const inviteToChannel = async (req, res) => {}
// const receiveInvite = async (req, res) => {}

// // MESSAGE FUNCTIONS
// const sendMessage = async (req, res) => {
//   //when send message, all other users but you must get message
//   //message must be stored in message database, grabbing user info
//   console.log(req.body);
//   let {user, channel, content} = req.body;
//   console.log("i'm hit")
//   let newMessage = {};
//     newMessage.user = user;
//     newMessage.channel = channel;
//     newMessage.content = content;
//   let resp = await Messages.create(newMessage);
//     try {
//       console.log(resp +" added"); 
//     } catch (error) {
//       console.log(error)
//     } 
//   }
//   const addShows = async (req, res) => {
//     console.log(req.body);
//     let {showId, name, next_episode_to_air, episode_number, overview, season_number} = req.body;
//     let newShow = {};
//         newShow.showId = showId;
//         newShow.name = name;
//         newShow.next_episode_to_air = next_episode_to_air;
//         newShow.episode_number = episode_number;
//         newShow.overview = overview;
//         newShow.season_number = season_number;
//     let resp = await Shows.create(newShow);
//         try {
//             console.log(resp +"added");
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
// const addMovies = async (req, res) => {
//     console.log(req.body);
//     let{movieId, title, poster_path, release_date, vote_average, overview, runtime, revenue} = req.body;
//     let newMovie = {};
//         newMovie.movieId = movieId;
//         newMovie.title = title;
//         newMovie.poster_path = poster_path;
//         newMovie.release_date = release_date;
//         newMovie.vote_average = vote_average;
//         newMovie.overview = overview;
//         newMovie.runtime = runtime;
//         newMovie.revenue = revenue;
//     let resp = await Movies.create(newMovie);
//         try {
//             console.log(resp +"added");
//         } catch (error) {
//             console.log(error)
//         }
//     }
// console.log("hi")
// module.exports = {addMovies, addShows, sendMessage}
//   // let newNote = await Note.create(note);
//   //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})


  // let newNote = await Note.create(note);
  //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})


// // a user can:
// // - sign up
// // - login
// // - logout
// // - create channels
// // - view one chat (channel) at a time ??
// // - be invited to a channel
// // - invite others to any channel they are active(?) 
// // - write messages
// // - search a list of movies and show  
// // - can save a show or movie as a favorites
// // - can create a channel based on search results 
// // - write a review
// //   - no reviews no spoilers
// // - rate an episode when you mark watched 
// // - mute channel?
// // - unmute channel?
// // - leave a chat and see old history in archive