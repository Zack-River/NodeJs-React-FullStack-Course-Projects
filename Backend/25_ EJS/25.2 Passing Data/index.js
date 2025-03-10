import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    fName: "First Name",
    lName: "Last Name",
    noLetters: null
  });
});

app.post("/submit", (req, res) => {
  let letters = req.body["fName"].length + req.body["lName"].length;
  console.log("Number Of letters: ", letters);
  res.render("index.ejs", {
    noLetters: letters,
    fName: req.body["fName"],
    lName: req.body["lName"]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
