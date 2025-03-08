import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit" , (req , res) => {
  console.log(req.body);
  res.sendFile(_dirname + "/public/submit.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  //console.log(import.meta.url); // file:///"Full Directory"/filename.extension;
  //console.log(fileURLToPath(import.meta.url)); // "Full Directory"/filename.extension;
  //console.log(dirname(fileURLToPath(import.meta.url))); // "Full Directory";
});

function logger (req,res,next) {
  console.log(`Requested Method: ${req.method}`);
  console.log(`Requested URL: ${req.url}`);
  next();
}