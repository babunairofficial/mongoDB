const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatmsngr');
}

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
});

//New Route
app.get("/chats/new", (req, res) => {
    throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

//Create Route
app.post("/chats", (req, res) => {
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    // console.log(newChat);

    newChat.save().then((res) => {
        console.log("chat was saved");
    })
    .catch((err) => {
        console.log(err);
    });

    // res.send("working");
    res.redirect("/chats");
});

//NEW - Show Route
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
});

//Edit route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs", {chat});
});

//Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMsg},
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("root is working");
});

//error handler middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occured"} = err; // with default values
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})