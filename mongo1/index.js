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

//DELETE model - findByIdAndDelete
User.findByIdAndDelete("68e92af37679b9df3928a0de").then((res) => {  //delete document by Id and display the deleted documents
  console.log(res);
});