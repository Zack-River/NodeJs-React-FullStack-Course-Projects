import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", (req, res) => {
  res.render("posts.ejs");
});

app.get("/topics", (req, res) => {
  res.render("topics.ejs");
});

app.get("/news", (req, res) => {
  res.render("news.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/create", (req , res) => {
  res.render("create.ejs");
});

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`);
});