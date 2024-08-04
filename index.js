const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000; 

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})