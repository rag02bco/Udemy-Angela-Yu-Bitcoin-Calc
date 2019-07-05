const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var result = num1/(num2 * num2);

    res.send("The result is " + result);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});