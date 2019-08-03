const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    movieId: {
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
    }

});

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;