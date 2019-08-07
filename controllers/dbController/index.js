const db     = require("../../models");
const config = require("../../config");
const Messages = require("../../models/messagesModel")


//USER FUNCTIONS
const saveShow = async (req, res) => {}
const saveMovie = async (req, res) => {}
const leaveChannel = async (req, res) => {//leaves channel}
const unmuteChannel = async (req, res) => {} //user function
const muteChannel = async (req, res) => {} //AUTO trigger 

// CHANNEL FUNCTIONS
const createChannel = async (req, res) => {}  //
const inviteToChannel = async (req, res) => {} //inviteusers


module.exports = {
//USER FUNCTIONS====================================
  sendMessage: async (req, res) => {
    console.log(req.body);
    let { user, channel, content } = req.body;
    console.log("sendMessage in controller is hit")
    let newMessage = {};
    newMessage.user = user;
    newMessage.channel = channel;
    newMessage.content = content;
    let resp = await Message.create(newMessage);
    try {
      console.log(resp + " added");
    } catch (error) {
      console.log(error)
    }
  },
//DB MISC FUNCTIONS, might belong in axios============================
  addShows: async (req, res) => {
    console.log(req.body);
    let { showId, name, next_episode_to_air, episode_number, overview, season_number } = req.body;
    let newShow = {};
    newShow.showId = showId;
    newShow.name = name;
    newShow.next_episode_to_air = next_episode_to_air;
    newShow.episode_number = episode_number;
    newShow.overview = overview;
    newShow.season_number = season_number;
    let resp = await Shows.create(newShow);
    try {
      console.log(resp + "added");
    } catch (error) {
      console.log(error)
    }
  },

  addMovies = async (req, res) => {
    console.log(req.body);
    let { movieId, title, poster_path, release_date, vote_average, overview, runtime, revenue } = req.body;
    let newMovie = {};
    newMovie.movieId = movieId;
    newMovie.title = title;
    newMovie.poster_path = poster_path;
    newMovie.release_date = release_date;
    newMovie.vote_average = vote_average;
    newMovie.overview = overview;
    newMovie.runtime = runtime;
    newMovie.revenue = revenue;
    let resp = await Movies.create(newMovie);
    try {
      console.log(resp + "added");
    } catch (error) {
      console.log(error)
    }
  }
}

  // let newNote = await Note.create(note);
  //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})

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