const db     = require("../models");
const jwt    = require("jwt-simple");
const config = require("../config");

const tokenForUser = user => {
    const timestamp = new Date().getTime();
    // Sub === subject
    // Iat === issues at time
    // It's going to encode the whole 1st object and then add our secret to it
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

module.exports = {
    signUp: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) return res.status(422).json({error: "You must provide an email and password"});
        
        try {
            // Check if the email already exists in db
            const existingUser = await db.User.findOne({email});
            // If user exists, throw error
            if (existingUser) return res.status(422).json({error: "Email is in use"});
            // Create new user object
            const user = new db.User({ email, password });
            // save user in db
            await user.save();
            // send user back
            res.json({token: tokenForUser(user)});
        } catch(e) {
            res.status(404).json({e});
        }
    },
    signIn: (req, res) => {
        console.log(req.user)
        res.send({token: tokenForUser(req.user)});
    }
}