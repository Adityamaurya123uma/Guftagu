// importing express js
const express = require("express");
//importing chats data api
const { chats } = require("./data/data");
//importing dotenv package for .env file 
const dotenv = require("dotenv");

dotenv.config();

//creating an instance of exrpess 
const app = express();

//creating and custom API
app.get('/', (req, res) => {
    res.send("API is Running successfully");
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

//creating port variable and assigning port number to it
const PORT = process.env.PORT || 5000

//creating your own server for the application
app.listen(PORT, console.log(`server started on port ${PORT}`));