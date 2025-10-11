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

//Update model - findOneAndUpdate
User.findOneAndUpdate({name: "suresh"}, {age: 45}).then((res) => { //update one document having name as "suresh" to age = 45 and display it
  //it would display the pre-update data
  console.log(res);
}).catch((err) => {
  console.log(err);
});
//to display the post-update data options can be used as another parameter within the model
//[options.new=true]