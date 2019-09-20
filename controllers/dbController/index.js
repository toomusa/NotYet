
const db = require("../../models");

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

const sendMessage = async (data, callback) => {
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

  let updatedUser = await db.User.findByIdAndUpdate(userId, 
          {$push: {messages: {
            sent_messages: newMessage.id,
            ref_channel: chatId
          }}}, {new: true})

  if (!isEmpty(chatData)) {
    let lastMessage = {chatId: chatData._id, messages: chatData.messages.pop()}
    callback(lastMessage)
  }
}

const createChannel = async (data, callback) => {
  let { userId } = data

  return new Promise( async (resolve, reject) => {
    let newChannel;
    let updatedUser;
    let channelResponse;

    try {
      let createChannel = await new db.Channel(data)
      await createChannel.save()
      newChannel = await db.Channel.findOneAndUpdate({_id: createChannel._id}, 
        {$push: {admin: userId}}, {new: true})
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
      resolve();
      callback(channelData)
    }
  })
}

const loadDashboard = async (data, callback) => {
  let userId = data

  return new Promise( async (resolve, reject) => {
    let userData;
    let channelData;
    
    try {
      userData = await db.User.findById(userId, 
        "_id username channels show_channels movie_channels inactive_channels messages friends favorite_shows favorite_movies")
        .populate("Channel")
    } catch (e) {
      console.log("Oooops", e)
    }

    try {
      channelData = await db.Channel.find({_id: userData.channels})
        .populate("messages.sent_messages")
        .populate("messages.sender")
        .populate("messages.ref_channel")
    } catch (e) {
      console.log("Oooops", e)
    }
    
    if (userData && channelData) {
      let dashboardData = {Users: userData, Channels: channelData};
      resolve();
      callback(dashboardData)
    } else {reject()}
  })
}

module.exports = { createChannel, sendMessage, loadDashboard };


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
