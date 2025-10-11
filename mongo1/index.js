const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
 
}


//Schema for our collection named User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


//Models

//models also named as the collection, User
const User = mongoose.model("User", userSchema);

//Update model - findByIdAndUpdate
User.findByIdAndUpdate("68e9178b98d19c1a03b2dd25", {name: "laxman"}, {new: true}).then((res) => { //update one document having having a ID
  //and display the post-update data as options object have been used. 
  console.log(res);
}).catch((err) => {
  console.log(err);
});