import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import morgan from "morgan";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var name = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(nameGenerator);

app.get("/" , (req , res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit" , (req , res) => {
  res.sendFile(_dirname + "/public/submit.html");
  console.log("Data Entered: ", req.body);
  console.log(`Your name now is: ${name}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function nameGenerator(req , res , next) {
  name = req.body["street"] + req.body["pet"];
  next();
}