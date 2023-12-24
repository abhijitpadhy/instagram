const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

// Define user schema
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }]
});

// Plugin for passport-local-mongoose
userSchema.plugin(plm);

// Export the model
module.exports = mongoose.model("user", userSchema);
