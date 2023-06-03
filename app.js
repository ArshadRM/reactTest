const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/front-page/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})

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



