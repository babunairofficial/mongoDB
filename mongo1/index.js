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

//find model
User.find({age: {$lte: 35}}).then((res) => { //find documents with an age criteria
  console.log(res);
}).catch(err => {console.log(err);
});