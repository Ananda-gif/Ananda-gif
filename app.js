const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World et node.js"));

app.listen(port, () => console.log("Notre application node.js"));
