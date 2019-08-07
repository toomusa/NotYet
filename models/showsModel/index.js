const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ShowsSchema = new Schema({
    show_id: {
        type: Number
    },
    original_name: {
        type: String
    },
    next_episode_to_air: {
        type: String
    },
    last_air_date: {
        type: String
    },
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    popularity: {
        type: Number
    },
    genre: [{
        id: Number,
        name: String
    }],
    number_of_episodes: {
        type: Number
    },
    number_of_seasons: {
        type: Number
    },
    status: {
        type: String
    },
    average_votes: {
        type: Number
    },
    homepage: {
        type: String
    }


});

const Shows = mongoose.model("shows", ShowsSchema);

module.exports = Shows;