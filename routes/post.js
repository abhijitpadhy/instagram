const mongoose = require('mongoose');


// Define user schema
const postSchema = mongoose.Schema({
  picture: String,
  user: {
     type:mongoose.Schema.Types.ObjectId,
     ref:"user"
  },
  caption:String,
date:{
    type:Date,
    dafault:Date.now
},
likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
}]

});



// Export the model
module.exports = mongoose.model("post", postSchema);
