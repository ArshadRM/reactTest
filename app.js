const express = require("express");

const app = express();
const port = 3000;
const fs = require('fs').promises;
let msg = "hisasa";

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/index.html");
});

app.get("/styles.css", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/styles.css");
});

app.get("/bgResized.png", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/bgResized.png");
});

app.get("/message", (req,res) => {
    res.render("message", {
        message: req.socket.remoteAddress
    })
})

app.listen(port, () =>{
    console.log(`App running on http://localhost:${port}`);
});



