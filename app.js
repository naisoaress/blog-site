const express = require("express");
const app = express();

app.get("/", (req, res) => {
        res.sendFile(__dirname + "/views/index.html");
});
app.get("/login", (req, res) => {
        res.sendFile(__dirname + "/views/login.html");
});
app.get("/sign-up", (req, res) => {
        res.sendFile(__dirname + "/views/sign-up.html");
});

app.listen(3000);