import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios"
import morgan from "morgan";

const app = new express();
const port = 3000;
const api = "https://kitsu.io/api/edge";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , (req,res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});