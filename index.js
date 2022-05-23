const express = require("express");
const app = express();
const port = 3000;
app.get("/run", (req, res) => {
    res.send("Hi")
})
app.listen(port, () => {
    console.log("Hi");
})