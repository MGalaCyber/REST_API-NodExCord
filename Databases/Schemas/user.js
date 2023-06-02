//=====================================| Import the Module |=====================================\\
const Mongoose = require("mongoose");

module.exports = Mongoose.model("user", new Mongoose.Schema({
    userID: { type: String },
    userEmail: { type: String },
    userAvatar: { type: String },
    userDisplayName: { type: String },
    userFlags: { type: Number },
}));