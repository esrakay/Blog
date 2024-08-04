const PORT = 3000; 

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/blog")
    .then(()=> {
        console.log("MongoDB connected...");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB:", err);
    })

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})