const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();
const port = 3000;

app.use(serveStatic(path.resolve(__dirname, "../client/public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

// app.get("/getUsers", (req, res) => {
//   setTimeout(() => {
//     res.json([{name: "user1"}, {name: "user2"}]);
//     //res.status(500).send("some error occured....");
//   }, 3000);
// });

// app.get("/getInfo", (req, res) => {
//   setTimeout(() => {
//     res.json([{name: "user1"}, {name: "user2"}]);
//   }, 2000);
// });

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!!!!`)
);
