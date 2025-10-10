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


const user1 = new User({
  name: "sachin",
  email: "sachin@gmail.com",
  age: 48,
});

user1.save(); //also an asynchronous method. Returns a promise

const user2 = new User({
  name: "rahul",
  email: "rahul@ymail.com",
  age: 47,
});

user2.save().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}); //added some extras with the promise