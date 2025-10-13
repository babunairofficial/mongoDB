const mongoose = require('mongoose');
const Chat = require("./models/chat");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatmsngr');
}

let allChats = [
    {
        from: "sneha",
        to: "roshni",
        message: "let us go for a movie",
        created_at: new Date()
    },
    {
        from: "jenny",
        to: "richa",
        message: "buy a book for me",
        created_at: new Date()
    },
    {
        from: "shree",
        to: "pratika",
        message: "go to the market",
        created_at: new Date()
    },
    {
        from: "radha",
        to: "renuka",
        message: "lets go out to play",
        created_at: new Date()
    },
    {
        from: "uma",
        to: "kritika",
        message: "call me when you reach home",
        created_at: new Date()
    },
    {
        from: "bharati",
        to: "rhea",
        message: "pick me up in the morning",
        created_at: new Date()
    },
    {
        from: "bhumi",
        to: "nisha",
        message: "lets go for a trip",
        created_at: new Date()
    },

]

Chat.insertMany(allChats);

// let chat1 = new Chat();

// chat1.save().then((res) => {
//     console.log(res);
// });

