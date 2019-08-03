
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const validateEmail = email => {
    return validator.isEmail(email);
}

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: [
            validateEmail,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    active_channels: {
        muted: Boolean,
        default: false,
        type: Schema.Types.ObjectId,
        ref: "Channel"
    },
    invited_channels: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
    },
    // channels: {
    //     admin: {
    //         type: Boolean,
    //         default: false
    //     },
    //     muted: {
    //         type: Boolean,
    //         default: false
    //     },
    //     active_channels: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Channel"
    //     }
    // }
    favorite_shows: {
        query_id: Number, //id to query TMDb with
        rating: Number
    },
    starred_messages: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: { type: Date, default: Date.now 
    }
});


UserSchema.pre("save", async function(next) {
    const user = this;
    try { 
        const salt = await bcrypt.genSalt();
        console.log("salt", salt);
        const hash = await bcrypt.hash(user.password, salt);
        console.log("hash", hash);
        user.password = hash;
        next();
    } catch(e) {
        return next(e);
    }
})

// methods attach to each instance of a document when queried 
UserSchema.methods.comparePassword = async function(candidatePassword, callback){
    const user = this;
    try {
        // compare entered password to existing password
        const isMatch = await bcrypt.compare(candidatePassword, user.password);
        // first parameter is error, second is response object (user or false)
        callback(null, isMatch);
    } catch(e) {
        callback(e);
    }
}

const User = mongoose.model("User", UserSchema);

module.exports = User;

//  _id, 
// name String, 
// active_channels: [ { muted: Boolean, channel_id: ref channel._id } ],
// invited_channels: ref[ channel._id],
// favorites_shows: [{}, {}],
// starred_messages: ref[ message._id ],
// friends: ref user._id
// )
