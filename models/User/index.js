
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const validateEmail = email => {
    return validator.isEmail(email);
}

const UserSchema = new Schema ({
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
    todos: [
        {
            ref: "Todo",
            type: Schema.Types.ObjectId
        }
    ]
})

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