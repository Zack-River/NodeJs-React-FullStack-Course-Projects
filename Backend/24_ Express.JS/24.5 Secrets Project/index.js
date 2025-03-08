import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

const _dirname = dirname(fileURLToPath(import.meta.url));

var home = _dirname + "/public/index.html";
var secret = _dirname + "/public/secret.html";

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(checkPassword)

app.get("/" , (req,res) => {
    res.sendFile(home);
    userIsAuthorised = false;
});

app.post("/check" , (req , res) => {
    if(userIsAuthorised) {
        res.sendFile(secret);
        console.log("Logged In Successfully");
    } else {
        res.redirect("/");
        console.log(`Entered Password: ${req.body["password"]}`);
    }
});

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`);
})

function checkPassword(req , res , next) {
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorised = true;
    }
    next();
}

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming