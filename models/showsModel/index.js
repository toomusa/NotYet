const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ShowsSchema = new Schema({
    showId: {
        type: Number
    },
    name: {
        type: String
    },
    next_episode_to_air: {
        type: String
    },
    episode_number: {
        type: Number
    },
    overview: {
        type: String
    },
    season_number: {
        type: Number
    }

});

const Shows = mongoose.model("shows", ShowsSchema);

module.exports = Shows;