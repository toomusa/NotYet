const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    movie_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    poster_path: {
        type: String
    },
    backdrop_path: {
        type: String
    },
    release_date: {
        type: String
    },
    vote_average: {
        type: Number
    },
    overview: {
        type: String
    },
    runtime: {
        type: Number
    },
    revenue: {
        type: Number
    },
    tagline: {
        type: String
    },
    genre: [{
        id: Number,
        name: String
    }],
    homepage: {
        type: String
    }
});

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;