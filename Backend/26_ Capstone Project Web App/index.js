import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path , { dirname } from "path";
import fs from "fs";

const app = express();
const port = 3001;

const _dirname = dirname(fileURLToPath(import.meta.url));
const postsFolder = path.join(_dirname,"posts");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(postsFolder)
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

app.post("/create", (req , res ) => {
  const fileName = "posts/"+req.body["post-name"]+".txt";
  const fileContent = req.body["post-name"] + "\n" + req.body["author-name"] + "\n" + req.body["post-content"];

  fs.writeFile(fileName, fileContent , (err) => {
    if(err)
      console.log("Error writing to file: ",err);
    console.log("File Written Successfully!")
  });

  res.redirect("/");
});

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`);
});