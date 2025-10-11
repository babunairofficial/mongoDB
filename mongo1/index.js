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

//Update model - UpdateOne
User.updateOne({name: "rahul"}, {age: 50}).then((res) => { //update one document having name "rahul" to age = 50
  console.log(res);
}).catch((err) => {
  console.log(err);
});